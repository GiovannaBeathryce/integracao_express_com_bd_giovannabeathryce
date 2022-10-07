import createCategoryService from "../../services/categories/createCategory.services";

const createCategoryController = async (req, res) => {
  const { name } = req.body;

  try {
    const newCategory = await createCategoryService(name);

    return res.status(201).json({
      message: "Category created",
      category: newCategory,
    });
  } catch (err) {
    return res.status(401).json(err);
  }
};

export default createCategoryController;
