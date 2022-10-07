import listCategoryIdService from "../../services/categories/listCategoryId.services";

const listCategoryIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await listCategoryIdService(id);
    return res.status(200).json(category);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};
export default listCategoryIdController;
