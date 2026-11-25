const express = require('express');

const workRoutes = require('../routes/work.routes');

const app = express();

app.use(express.json());

app.use('/works', workRoutes);
app.get('/', (_req, res) => res.json({ status: 'ok' }));

// Erros inesperados (por exemplo, banco fora do ar) viram uma resposta JSON
// sem expor detalhes internos.
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Erro interno do servidor' });
});

module.exports = app;
