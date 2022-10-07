import { Router } from "express";
import listProductsByCategoryIdController from "../controllers/listProductsByCategoryId.controller";
import createProductController from "../controllers/products/createProduct.controller";
import deleteProductController from "../controllers/products/deleteProduct.controller";
import listProductIdController from "../controllers/products/listProductId.controller";
import listProductsController from "../controllers/products/listProducts.controller";
import updateProductController from "../controllers/products/updateProduct.controller";
import necessaryDataMiddlewares from "../middlewares/productsMidllewares/necessaryDate.midlleware";
import verifyProductIdMiddlewares from "../middlewares/productsMidllewares/verifyProductIdExisting.midlleware";

const products_router = Router();

products_router.post("", necessaryDataMiddlewares, createProductController);
products_router.get("", listProductsController);
products_router.get(
  "/:id",
  verifyProductIdMiddlewares,
  listProductIdController
);
products_router.patch(
  "/:id",
  verifyProductIdMiddlewares,
  updateProductController
);
products_router.delete(
  "/:id",
  verifyProductIdMiddlewares,
  deleteProductController
);

products_router.get(
  "/category/:category_id",
  listProductsByCategoryIdController
);

export default products_router;
