const { Router } = require('express');

const workController = require('../controllers/work.controller');

const routes = new Router();

routes.get('/', workController.getAllWorks);

module.exports = routes;
