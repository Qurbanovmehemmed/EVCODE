import mongoose from "mongoose";
import product from "../models/productSchema.js";

export const addProduct = async (req, res) => {
  try {
    const newProduct = product(req.body);
    await newProduct.save();
    return res.status(201).json({
      success: true,
      message: "product added",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const products = await product.find();
    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
  try {
    const deletedProduct = await product.findByIdAndDelete(id)
    if (!deletedProduct) {
        return res.status(404).json({
            success:true,
            message:"prduct not foud"
        })
    }
    return res.status(200).json({
        success: true,
        deletedProduct,
      });
  
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};


export const getProductById = async (req, res) => {
    const { id } = req.params;
  try {
    const getIdProduct = await product.findById(id)
    if (!getIdProduct) {
        return res.status(404).json({
            success:true,
            message:"prduct not foud"
        })
    }
    return res.status(200).json({
        success: true,
        getIdProduct,
      });
  
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};
