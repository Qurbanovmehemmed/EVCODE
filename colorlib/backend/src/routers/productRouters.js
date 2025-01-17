import express from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProductById,
} from "../controllers/productControllers.js";

const productRouters = express.Router();

productRouters.post("/", addProduct);
productRouters.get("/", getProduct);
productRouters.get("/:id", getProductById);
productRouters.delete("/:id", deleteProduct);

export default productRouters;
