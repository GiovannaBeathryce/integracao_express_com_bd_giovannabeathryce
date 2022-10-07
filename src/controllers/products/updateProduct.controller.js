import updateProductService from "../../services/products/updateProduct.services";

const updateProductController = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  try {
    const updated = await updateProductService(product, id);
    return res.status(200).json({
      message: "Product updated",
      product: updated,
    });
  } catch (err) {
    return res.status(400).json(err.message);
  }
};
export default updateProductController;
