import expresss from "express";
import "dotenv/config"
import "./src/db/dbConnection.js"
import cors from 'cors'
import productRouter from "./src/routers/productRouter.js";

const port = process.env.PORT || 5001;

const app = expresss();
app.use(expresss.json())

app.use(cors())
app.use("/api/products",productRouter)

app.get("/", (req, res) => {
  res.send("hello maqa");
});

app.listen(port, (req, res) => {
  console.log(`server is runniing ${port}`);
});
