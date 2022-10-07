import createProductService from "../../services/products/createProduct.services";

const createProductController = async (req, res) => {
  const { name, price, category_id } = req.body;
  try {
    const newProduct = await createProductService(name, price, category_id);

    return res.status(201).json({
      message: "Product created",
      product: newProduct,
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default createProductController;
