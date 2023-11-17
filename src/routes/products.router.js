import { Router } from "express";
import{getAll, getById,createProduct,updateProduct,deleteProduct} from "../controllers/products.controler.js"

const router= Router();



//get all 
router.get("/", getAll);

//get by id 
router.get("/:pid",getById);

//create product
router.post("/",createProduct);

//update Porduct
router.put("/:pid",updateProduct);

//delete Poduct
router.delete("/:pid", deleteProduct)



export default router; 