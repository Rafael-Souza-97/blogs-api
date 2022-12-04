const { Category } = require('../models');

const getAllCategories = async () => {
  const categoriesResult = await Category.findAll();

  return categoriesResult;
};

const getCategoryById = async (id) => {
  const categories = await Category.findAll({ where: { id } });

  return categories;
};

const verifyCategories = async (categoryIds) => {
  let categoriesNotFound = 0;

  await Promise.all(categoryIds.map(async (categoryId) => {
    const categoryById = await getCategoryById(categoryId);
    if (categoryById.length === 0) {
      categoriesNotFound += 1;
    }
  }));

  return categoriesNotFound;
};

const addNewCategory = async (name) => {
  const result = await Category.findOne({ where: { name } });

  if (result) return false;
  
  const { dataValues } = await Category.create({ name });

  return dataValues;
};

module.exports = {
  getAllCategories,
  verifyCategories,
  addNewCategory,
};
