import updateCategoryService from "../../services/categories/updateCategory.services";

const updateCategoryController = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updated = await updateCategoryService(name, id);
    return res.status(200).json({
      message: "Category updated",
      category: updated,
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

export default updateCategoryController;
