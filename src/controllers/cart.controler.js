import CartsMongo from "../DAO/classes/cartsClass.js";

const cartMongo = new CartsMongo()

const createCart=async(req, res)=>{
    const newCart= await cartMongo.createCart();
    res.json({result:"success", payload:newCart})
}


const getAll=async(req,res)=>{
    const carts= await cartMongo.getAll();
    res.json(carts)
}

const getById=async(req, res)=>{
    const cid = req.params.cid
    const cart = await cartMongo.getById(cid);
    res.json(cart)
}

const addProduct= async(req, res)=>{
    const cid= req.params.cid;
    const pid= req.params.pid;
    const result= await cartMongo.addProduct(cid,pid);
    res.json(result)
}

const deleteProduct= async (req, res)=>{
    const cid= req.params.cid;
    const pid= req.params.pid;

    const result= cartMongo.deleteProduct(cid,pid);
    res.json(result)
}

export default{createCart,getAll,getById,addProduct,deleteProduct}