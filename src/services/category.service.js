const { Category } = require('../models');

const getAllCategories = async () => {
  const categoriesResult = await Category.findAll();

  return categoriesResult;
};

const addNewCategory = async (name) => {
  const result = await Category.findOne({ where: { name } });

  if (result) return false;
  
  const { dataValues } = await Category.create({ name });

  return dataValues;
};

module.exports = {
  getAllCategories,
  addNewCategory,
};
