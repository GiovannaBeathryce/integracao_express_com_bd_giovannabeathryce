import listProductIdService from "../../services/products/listProductId.services";

const listProductIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await listProductIdService(id);
    return res.status(200).json(product);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

export default listProductIdController;
