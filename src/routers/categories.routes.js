import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import deleteCategoryController from "../controllers/categories/deleteCategory.controller";
import listCategoriesController from "../controllers/categories/listCategories.controller";
import listCategoryIdController from "../controllers/categories/listCategoryId.controller";
import updateCategoryController from "../controllers/categories/updateCategory.controller";
import verifyCategoryIdMiddlewares from "../middlewares/categoriesMidllewares/verifyCategoryIdExisting.midlleware";
import verifyExistingCategoryMiddlewares from "../middlewares/categoriesMidllewares/verifyExistingCategory.midlleware";

const category_router = Router();

category_router.post(
  "",
  verifyExistingCategoryMiddlewares,
  createCategoryController
);
category_router.get("", listCategoriesController);
category_router.get(
  "/:id",
  verifyCategoryIdMiddlewares,
  listCategoryIdController
);
category_router.patch(
  "/:id",
  verifyCategoryIdMiddlewares,
  updateCategoryController
);
category_router.delete(
  "/:id",
  verifyCategoryIdMiddlewares,
  deleteCategoryController
);

export default category_router;
