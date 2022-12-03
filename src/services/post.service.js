const { User, BlogPost, Category } = require('../models');

const getAllPosts = async () => {
  const postsResult = await BlogPost.findAll({ include: [{
      model: User, as: 'user', attributes: { exclude: ['password'] },
    }, {
      model: Category, as: 'categories', through: { attributes: [] },
    }],
    });

  const postMap = postsResult.map((post) => post.dataValues);

  return postMap;
};  

const getPostById = async (id) => {
  const postResult = await BlogPost.findOne({ include: [{
    model: User, as: 'user', attributes: { exclude: ['password'] }, where: { id },
  }, {
    model: Category, as: 'categories', through: { attributes: [] },
    }],
  });

  if (!postResult) return false;

  return postResult;
};

module.exports = {
  getAllPosts,
  getPostById,
};
