const routes = require('express').Router();

const controllers = require("../Controllers"); // Use the correct path


routes.get('/', controllers.Books);

module.exports = routes;