import mongoose from "mongoose";
import product from "../models/productSchema.js";

export const addProduct = async (req, res) => {
  try {
    const newProduct = product(req.body);

    await newProduct.save();

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "internal server error" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await product.find();

    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "internal server error" });
  }
};

export const getProductsById = async (req, res) => {
  const { id } = req.params;
  try {
    const findProducts = await product.findById(id);
    if (!findProducts) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    return res.status(200).json({
      success: true,
      findProducts,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "internal server error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProducts = await product.findByIdAndDelete(id);
    if (!deleteProducts) {
      return res
        .status(400)
        .json({ success: false, message: "Product not found" });
    }

    return res.status(200).json({
      success: true,
      deleteProducts,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "internal server error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const updateProduct = await product.findByIdAndUpdate(id, req.body);
    if (!updateProduct) {
      return res
        .status(400)
        .json({ success: false, message: "Product not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Product updated",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "internal server error" });
  }
};
