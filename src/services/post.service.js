const {
  User,
  BlogPost,
  Category,
  PostCategory,
  Sequelize,
} = require('../models');

const { Op } = Sequelize;

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
  const postResult = await BlogPost.findOne({ 
    where: { id }, 
    include: [{
    model: User, as: 'user', attributes: { exclude: ['password'] },
  }, {
    model: Category, as: 'categories', through: { attributes: [] },
    }],
  });

  if (!postResult) return false;

  return postResult;
};

const searchPosts = async (q) => {
  const post = await BlogPost.findAll({
    where: {
      [Op.or]: {
        title: { [Op.like]: `%${q}%` },
        content: { [Op.like]: `%${q}%` },
      },
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) return false;

  return post;
};

const createPost = async ({ userId, title, content, categoryIds }) => {
  const newPost = await BlogPost.create({
    title,
    content,
    userId,
    updated: Date.now(),
    published: Date.now(),
  });

  const { id } = newPost.dataValues;

  await Promise.all(categoryIds.map(async (idCategory) => {
    await PostCategory.create({
    postId: id,
    categoryId: idCategory,
    });
  }));

  return newPost;
};

const updatePost = async (id, title, content) => {
  const [updatedPost] = await BlogPost.update(
    { title, content },
    { where: { id } },
  );
  
  return updatedPost;
};

const deletePost = async (id) => {
  const deletedUserId = await BlogPost.destroy(
    { where: { id } },
  );

  return deletedUserId;
};

module.exports = {
  getAllPosts,
  getPostById,
  searchPosts,
  createPost,
  updatePost,
  deletePost,
};
