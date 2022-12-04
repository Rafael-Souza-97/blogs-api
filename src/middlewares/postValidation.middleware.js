const { HTTP_BAD_REQUEST } = require('../utils/requisitionsErrors');

const postValidation = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) { 
    return res.status(HTTP_BAD_REQUEST).json({ 
      message: 'Some required fields are missing',
    });
  }

  return next();
};

const putValidation = (req, res, next) => {
  const { title, content } = req.body;

  if (!title || !content) { 
    return res.status(HTTP_BAD_REQUEST).json({ 
      message: 'Some required fields are missing',
    });
  }

  return next();
};

module.exports = {
  postValidation,
  putValidation,
};
