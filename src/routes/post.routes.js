const express = require('express');
const {
  getAllPosts,
  getPostById,
  searchPosts,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/post.controller');
const {
  postValidation,
  putValidation,
} = require('../middlewares/postValidation.middleware');
const { tokenValidation } = require('../middlewares/tokenValidation.middleware');

const postRouter = express.Router();

postRouter.get('/', tokenValidation, getAllPosts);

postRouter.get('/search', tokenValidation, searchPosts);

postRouter.get('/:id', tokenValidation, getPostById);

postRouter.post('/', tokenValidation, postValidation, createPost);

postRouter.put('/:id', tokenValidation, putValidation, updatePost);

postRouter.delete('/:id', tokenValidation, deletePost);

module.exports = postRouter;
