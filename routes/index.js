const routes = require('express').Router();

const MyController = require('../controllers');

routes.get('/', MyController.PersonOne);

module.exports = routes;