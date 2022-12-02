const categoryService = require('../services/category.service');
const { HTTP_STATUS_CREATED } = require('../utils/requisitionStatus');
const { HTTP_SERVIDOR_ERROR } = require('../utils/requisitionsErrors');

const addNewCategory = async (req, res) => {
  const { name } = req.body;

  const newCategoryResult = await categoryService.addNewCategory(name);

  if (!newCategoryResult) {
    return res.status(HTTP_SERVIDOR_ERROR).json({ message: 'Something went wrong' });
  }

  return res.status(HTTP_STATUS_CREATED).json(newCategoryResult);
};

module.exports = {
  addNewCategory,
};
