import listProductsByCategoryIdService from "../services/listProductsByCategoryId.services";

const listProductsByCategoryIdController = async (req, res) => {
  const { category_id } = req.params;
  try {
    const listById = await listProductsByCategoryIdService(category_id);
    return res.status(200).json(listById);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};
export default listProductsByCategoryIdController;
