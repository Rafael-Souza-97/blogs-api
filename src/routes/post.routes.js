const express = require('express');
const { getAllPosts, getPostById, updatePost } = require('../controllers/post.controller');
const { postValidation, putValidation } = require('../middlewares/postValidation.middleware');
const { tokenValidation } = require('../middlewares/tokenValidation.middleware');

const postRouter = express.Router();

postRouter.get('/', tokenValidation, getAllPosts);

postRouter.get('/:id', tokenValidation, getPostById);

postRouter.post('/', tokenValidation, postValidation);

postRouter.put('/:id', tokenValidation, putValidation, updatePost);

module.exports = postRouter;
