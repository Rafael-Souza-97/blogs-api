const postService = require('../services/post.service');
const { verifyCategories } = require('../services/category.service');
const {
  validateUserToken,
  getUserIdByToken,
} = require('../auth/validateUserToken');
const {
  HTTP_STATUS_OK,
  HTTP_STATUS_NO_CONTENT,
  HTTP_STATUS_CREATED,
} = require('../utils/requisitionStatus');
const {
  HTTP_SERVIDOR_ERROR,
  HTTP_NOT_FOUND,
  HTTP_UNAUTHORIZED,
  HTTP_BAD_REQUEST,
} = require('../utils/requisitionsErrors');

const getAllPosts = async (_req, res) => {
  const postsResult = await postService.getAllPosts();

  if (!postsResult) {
    return res.status(HTTP_SERVIDOR_ERROR).json({ message: 'Something went wrong' });
  }

  return res.status(HTTP_STATUS_OK).json(postsResult);
};

const getPostById = async (req, res) => {
  const { id } = req.params;

  const postResult = await postService.getPostById(id);

  if (!postResult) {
    return res.status(HTTP_NOT_FOUND).json({ message: 'Post does not exist' });
  }

  return res.status(HTTP_STATUS_OK).json(postResult);
};

const searchPosts = async (req, res) => {
  const { q } = req.query;
  const post = await postService.searchPosts(q);

  if (!post) return res.status(HTTP_NOT_FOUND).json({ message: 'Post does not exist' });

  return res.status(HTTP_STATUS_OK).json(post);
};

const createPost = async (req, res) => {
    const { authorization } = req.headers;
    const { title, content, categoryIds } = req.body;

    const invalidCategories = await verifyCategories(categoryIds);

    if (invalidCategories !== 0) {
      return res.status(HTTP_BAD_REQUEST)
      .json({ message: 'one or more "categoryIds" not found' });
    }

    const userId = getUserIdByToken(authorization);

    const post = await postService
      .createPost({ userId, title, content, categoryIds });
  
    return res.status(HTTP_STATUS_CREATED).json(post);
};

const updatePost = async (req, res) => {
  const { authorization } = req.headers;
  const { id: postId } = req.params;
  const { title, content } = req.body;

  const { user_id: userId } = await postService.getPostById(postId);

  const userToken = validateUserToken(authorization, userId);
  
  if (userToken === 'Unauthorized user') {
    return res.status(HTTP_UNAUTHORIZED).json({ message: 'Unauthorized user' });
  }

  await postService.updatePost(postId, title, content);

  const updatedPost = await postService.getPostById(postId);

  return res.status(HTTP_STATUS_OK).json(updatedPost);
};

const deletePost = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const { id: postId } = req.params;
  
    const post = await postService.getPostById(postId);
  
    const { userId } = post.dataValues;
  
    const userToken = validateUserToken(authorization, userId);
  
    if (userToken === 'Unauthorized user') {
      return res.status(HTTP_UNAUTHORIZED).json({ message: 'Unauthorized user' });
    }
  
    await postService.deletePost(postId);
  
    return res.status(HTTP_STATUS_NO_CONTENT).end();
  } catch (error) {
    console.log(error);

    return res.status(HTTP_NOT_FOUND).json({ message: 'Post does not exist' });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  searchPosts,
  createPost,
  updatePost,
  deletePost,
};
