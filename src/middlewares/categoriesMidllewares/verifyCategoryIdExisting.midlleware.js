import database from "../../database";

const verifyCategoryIdMiddlewares = async (req, res, next) => {
  const { id } = req.params;

  const categories = await database.query("SELECT c.id FROM categories c");

  const existingCategory = categories.rows.findIndex((c) => c.id === id);

  if (existingCategory === -1) {
    return res.status(400).json({ message: "Category not exist" });
  }
  next();
};

export default verifyCategoryIdMiddlewares;
