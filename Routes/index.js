const routes = require('express').Router();

const controllers = require("../Controllers"); // Use the correct path
//check spelling

routes.get('/', controllers.Books);

module.exports = routes;