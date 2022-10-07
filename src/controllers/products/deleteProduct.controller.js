import deleteProductService from "../../services/products/deleteProduct.services";

const deleteProductController = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await deleteProductService(id);
    return res.status(204).json(deletedProduct);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

export default deleteProductController;
