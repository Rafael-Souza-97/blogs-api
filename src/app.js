const express = require('express');
const loginRoutes = require('./routes/login.routes');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRoutes);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
