import express from 'express'
import { addProduct, deleteProducts, getAllProducts } from '../controllers/productControllers.js'

const productRouter =express.Router()
productRouter.post("/",addProduct)
productRouter.get("/",getAllProducts)
productRouter.delete("/:id",deleteProducts)

export default productRouter