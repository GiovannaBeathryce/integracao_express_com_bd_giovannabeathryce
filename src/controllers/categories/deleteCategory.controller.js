import deleteCategoryService from "../../services/categories/deleteCategory.services";

const deleteCategoryController = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await deleteCategoryService(id);

    return res.status(204).json(deletedCategory);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

export default deleteCategoryController;
