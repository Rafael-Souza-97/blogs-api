const express = require('express');
const { getAllPosts } = require('../controllers/post.controller');
const { postValidation } = require('../middlewares/postValidation.middleware');
const { tokenValidation } = require('../middlewares/tokenValidation.middleware');

const postRouter = express.Router();

postRouter.get('/', tokenValidation, getAllPosts);

postRouter.post('/', tokenValidation, postValidation);

module.exports = postRouter;
