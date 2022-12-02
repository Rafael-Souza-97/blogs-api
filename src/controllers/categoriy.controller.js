const categoryService = require('../services/category.service');
const { HTTP_STATUS_CREATED, HTTP_STATUS_OK } = require('../utils/requisitionStatus');
const { HTTP_SERVIDOR_ERROR } = require('../utils/requisitionsErrors');

const getAllCategories = async (_req, res) => {
  const categoriesResult = await categoryService.getAllCategories();

  if (!categoriesResult) {
    return res.status(HTTP_SERVIDOR_ERROR).json({ message: 'Something went wrong' });
  }

  return res.status(HTTP_STATUS_OK).json(categoriesResult);
};

const addNewCategory = async (req, res) => {
  const { name } = req.body;

  const newCategoryResult = await categoryService.addNewCategory(name);

  if (!newCategoryResult) {
    return res.status(HTTP_SERVIDOR_ERROR).json({ message: 'Something went wrong' });
  }

  return res.status(HTTP_STATUS_CREATED).json(newCategoryResult);
};

module.exports = {
  getAllCategories,
  addNewCategory,
};
