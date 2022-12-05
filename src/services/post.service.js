const { User, BlogPost, Category, PostCategory } = require('../models');

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
  createPost,
  updatePost,
  deletePost,
};
