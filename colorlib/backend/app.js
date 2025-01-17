import mongoose from "mongoose";
import "dotenv/config";
import "./src/db/dbConnection.js";
import express from "express";
import productRouters from "./src/routers/productRouters.js";

const port = process.env.PORT || 5001;

const app = express();
app.use(express.json());


app.use("/api/products", productRouters);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
