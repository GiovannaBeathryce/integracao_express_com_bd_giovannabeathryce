import listProductsService from "../../services/products/listProducts.services";

const listProductsController = async (req, res) => {
  try {
    const products = await listProductsService();

    return res.status(200).json(products);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};
export default listProductsController;
