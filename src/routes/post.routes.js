const express = require('express');
// const { addNewPost } = require('../controllers/post.controller');
const { postValidation } = require('../middlewares/postValidation.middleware');
const { tokenValidation } = require('../middlewares/tokenValidation.middleware');

const PostRouter = express.Router();

PostRouter.post('/', tokenValidation, postValidation);

module.exports = PostRouter;
