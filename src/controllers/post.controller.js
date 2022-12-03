const postService = require('../services/post.service');
const { validateUserToken } = require('../auth/generateToken');
const { HTTP_STATUS_OK } = require('../utils/requisitionStatus');
const {
  HTTP_SERVIDOR_ERROR,
  HTTP_NOT_FOUND,
  HTTP_UNAUTHORIZED,
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

module.exports = {
  getAllPosts,
  getPostById,
  updatePost,
};
