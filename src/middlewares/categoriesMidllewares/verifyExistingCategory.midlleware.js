import database from "../../database";

const verifyExistingCategoryMiddlewares = async (req, res, next) => {
  const { name } = req.body;

  const categories = await database.query("SELECT c.name FROM categories c");

  const existingCategory = categories.rows.find((c) => c.name === name);

  if (existingCategory) {
    return res.status(400).json({ message: "This name is already being used" });
  }
  next();
};

export default verifyExistingCategoryMiddlewares;
