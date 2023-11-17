import { cartModel } from "../models/cartsModel.js";

 class CartsMongo {
  constructor() {}

  createCart = async () => {
    try {
      const cart = await cartModel.create({ products: [] });
      return cart
    } catch (error) {
      console.error("error al crear carrito", error);
    }
  };

  getAll = async () => {
    try {
      const carts = await cartModel.find().populate("products.item");
      return carts;
    } catch (error) {
      console.error("error al obtener carritos: ", error);
    }
  };

  getById= async(cartId)=>{
    try {
        const cart = await cartModel.findById(cartId).populate("products.item").lean();
      
      return cart;
    } catch (error) {
        console.error("error al obtener carrito: ", error)
    }
  }

  addProduct=async(cartId,productId,quantity)=>{

    try {
        const cart = await cartModel.findById(cartId);
        if(!cart)return `el carrito con id ${cartId} no existe`;

        const existingProduct= cart.products.find((prod)=>prod._id==productId);
        if(existingProduct){
            existingProduct.quantity+=quantity;
            console.log(`se ha agregado la cantidad de ${quantity} item(s) al producto`) 
        }else{
            const newProduct={product:productId, quantity:quantity};
            cart.products.push(newProduct);
            console.log(`se ha agregado el producto ${productId} al carrito`) 
        };


        await cart.save();
        return cart
    } catch (error) {
        console.error("error :", error);
    }
  }

  deleteProduct=async(cartId,productId)=>{
    try {
        
        const cart= await cartModel.findById(cartId);
        if(!cart)return `el carrito con id ${cartId} no existe`;

        const productToDeleteIndex = cart.products.findIndex((prod) => prod.item.toString() === productId);
  
        if (productToDeleteIndex === -1) {
          console.log("Producto no encontrado en el carrito");
        } else {
          // Eliminar el producto del array de productos del carrito
          cart.products.splice(productToDeleteIndex, 1);
          await cart.save();
          return `producto ${productId} eliminado del carrito`;
        }



    } catch (error) {
        console.error("error:", error)
    }
  }

}
export default CartsMongo