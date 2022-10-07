import database from "../../database";

const updateCategoryService = async (name, id) => {
  try {
    const res = await database.query(
      "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *",
      [name, id]
    );

    if (res.rows.length === 0) {
      throw "Category not found";
    }

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default updateCategoryService;
