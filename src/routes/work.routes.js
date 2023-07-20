const { Router } = require('express');

const workController = require('../controllers/work.controller');
const validToken = require('../middlewares/valid.token');

const routes = new Router();

routes.get('/', validToken, workController.getAllWorks);
routes.get('/:id', validToken, workController.getWorkById);

module.exports = routes;
