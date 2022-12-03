const express = require('express');
const { getAllPosts, getPostById } = require('../controllers/post.controller');
const { postValidation } = require('../middlewares/postValidation.middleware');
const { tokenValidation } = require('../middlewares/tokenValidation.middleware');

const postRouter = express.Router();

postRouter.get('/', tokenValidation, getAllPosts);

postRouter.get('/:id', tokenValidation, getPostById);

postRouter.post('/', tokenValidation, postValidation);

module.exports = postRouter;
