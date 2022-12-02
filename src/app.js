const express = require('express');
const loginRoutes = require('./routes/login.routes');
const userRoutes = require('./routes/user.routes');
const categoryRoutes = require('./routes/category.routes');
const postRoutes = require('./routes/post.routes');

const app = express();

app.use(express.json());

app.use('/login', loginRoutes);

app.use('/user', userRoutes);

app.use('/categories', categoryRoutes);

app.use('/post', postRoutes);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
