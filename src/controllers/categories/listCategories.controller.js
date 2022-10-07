import listCategoriesService from "../../services/categories/listCategories.services";

const listCategoriesController = async (req, res) => {
  try {
    const categories = await listCategoriesService();

    return res.status(200).json(categories);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};
export default listCategoriesController;
