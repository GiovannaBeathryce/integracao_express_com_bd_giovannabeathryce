import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import category_router from "./routers/categories.routes";
import products_router from "./routers/products.routes";

const app = express();
app.use(express.json());

app.use("/categories", category_router);
app.use("/products", products_router);

export default app.listen(3333, () => {
  startDatabase();
  console.log("Server running");
});
