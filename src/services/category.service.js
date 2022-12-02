const { Category } = require('../models');

const addNewCategory = async (name) => {
  const result = await Category.findOne({ where: { name } });

  if (result) return false;
  
  const { dataValues } = await Category.create({ name });

  return dataValues;
};

module.exports = {
  addNewCategory,
};
