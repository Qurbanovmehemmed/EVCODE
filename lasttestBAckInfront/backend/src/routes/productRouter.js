import express from "express";
import { addProduct, deleteProduct, getProducts, getProductsById, updateProduct } from "../controllers/productController.js";

const productRouters = express.Router();

productRouters.post("/",addProduct)
productRouters.get("/",getProducts)
productRouters.get("/:id",getProductsById)
productRouters.delete("/:id",deleteProduct)
productRouters.put("/:id",updateProduct)


export default productRouters;
