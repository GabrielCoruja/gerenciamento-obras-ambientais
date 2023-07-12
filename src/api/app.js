const express = require('express');

const workRoutes = require('../routes/work.routes');

const app = express();

app.use(express.json());

app.use('/works', workRoutes);
app.get('/', (_req, res) => res.send('Hello World!'));

module.exports = app;
