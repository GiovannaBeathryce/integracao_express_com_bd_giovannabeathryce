import database from "../../database";

const verifyProductIdMiddlewares = async (req, res, next) => {
  const { id } = req.params;

  const products = await database.query("SELECT p.id FROM products p");

  const existingProduct = products.rows.findIndex((c) => c.id === id);

  if (existingProduct === -1) {
    return res.status(400).json({ message: "Product not exist" });
  }
  next();
};

export default verifyProductIdMiddlewares;
