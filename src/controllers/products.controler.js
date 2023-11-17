import ProductsMOngo from "../DAO/classes/productsClass.js";

const productService=new ProductsMOngo();

export const getAll=async(req, res)=>{
    try {
        const products = await productService.getAll();
        res.json(products)
    } catch (error) {
        res.status(500).json({ result: "error", message: error.message });
    }
};

export const getById= async(req, res)=>{
    try {
        const pid= req.params.pid;
        const product= await productService.getById(pid);
        res.json(product)
    } catch (error) {
        res.status(500).json({ result: "error", message: error.message });
    }
}


export const createProduct= async( req, res)=>{
    try {
        const newProduct= req.body;
        if(!newProduct.title||!newProduct.description||!newProduct.code||!newProduct.price||!newProduct.status||!newProduct.stock||!newProduct.cat){
            res.send("faltan datos")
        }
        const createdProduct= await productService.createProduct(newProduct)
        res.json(createdProduct)

    } catch (error) {
        res.status(500).json({ result: "error", message: error.message });
    }
}




export const updateProduct= async(req, res)=>{
    try {
        
        const pid= req.params.pid;
        const data= req.body;

        const updatedProduct= await productService.updateProduct(pid,data);
        res.json(updatedProduct)



    } catch (error) {
        res.status(500).json({ result: "error", message: error.message });
    }
}




export const deleteProduct= async(req, res)=>{
    try {
        const pid= req.params.pid;

        const deletedProduct= await productService.deleteProduct(pid);
        res.json(deletedProduct)
    } catch (error) {
        res.status(500).json({ result: "error", message: error.message });
    }
}

export default {getAll, getById,createProduct,updateProduct,deleteProduct}