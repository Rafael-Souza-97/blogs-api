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

module.exports = {
  getAllPosts,
};
