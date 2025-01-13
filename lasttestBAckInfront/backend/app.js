import express from "express";
import "dotenv/config";
import "./src/db/dbConnection.js";
import productRouters from "./src/routes/productRouter.js";
import cors from "cors";

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/products", productRouters);

app.get("/", (req, res) => {
  res.send("hello maqa");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
