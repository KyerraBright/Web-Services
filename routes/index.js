const routes = require('express').Router();

const controllers = require("../controller"); // Use the correct path


routes.get('/', controllers.PersonOne);

module.exports = routes;