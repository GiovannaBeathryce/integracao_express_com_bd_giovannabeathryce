import database from "../database";

const listProductsByCategoryIdService = async (id) => {
  try {
    const res = await database.query(
      `SELECT products.name, products.price, categories.name AS category
      FROM
        products 
      JOIN 
        categories  ON products.category_id = categories.id
      WHERE 
      categories.id = $1;`,
      [id]
    );
    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};
export default listProductsByCategoryIdService;
