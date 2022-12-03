const postService = require('../services/post.service');
const { HTTP_STATUS_OK } = require('../utils/requisitionStatus');
const { HTTP_SERVIDOR_ERROR } = require('../utils/requisitionsErrors');

const getAllPosts = async (_req, res) => {
  const postsResult = await postService.getAllPosts();

  if (!postsResult) {
    return res.status(HTTP_SERVIDOR_ERROR).json({ message: 'Something went wrong' });
  }

  return res.status(HTTP_STATUS_OK).json(postsResult);
};

module.exports = {
  getAllPosts,
};
