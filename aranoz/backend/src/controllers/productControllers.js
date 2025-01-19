import mongoose from "mongoose";
import product from "../models/productModels.js";

export const addProduct = async (req, res) => {
  try {
    const newProducts = new product(req.body);

    await newProducts.save();

    return res
      .status(201)
      .json({ success: true, message: "product added succesfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "invalid server error" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await product.find();

    return res.status(200).json({ success: true, products });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "invalid server error" });
  }
};

export const deleteProducts = async (req, res) => {
    const { id } = req.params;
  try {

    const deletedProducts = await product.findByIdAndDelete(id);
    if (!deletedProducts) {
      return res.status.json({ success: false, message: "product not found" });
    }

    return res.status(200).json({ success: true, message: "product deleted" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "invalid server error" });
  }
};
