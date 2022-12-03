const postService = require('../services/post.service');
const { HTTP_STATUS_OK } = require('../utils/requisitionStatus');
const { HTTP_SERVIDOR_ERROR, HTTP_NOT_FOUND } = require('../utils/requisitionsErrors');

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

module.exports = {
  getAllPosts,
  getPostById,
};
