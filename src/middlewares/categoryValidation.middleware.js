const { HTTP_BAD_REQUEST } = require('../utils/requisitionsErrors');

const categoryValidation = (req, res, next) => {
  const { name } = req.body;

  if (!name) { 
    return res.status(HTTP_BAD_REQUEST).json({ 
      message: '"name" is required',
    });
  }

  return next();
};

module.exports = { categoryValidation };
