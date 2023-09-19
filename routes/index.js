//const routes = require('express').Router();

//const MyController = require('../controllers');


//routes.get('/', MyController.PersonOne);

//module.exports = routes;

const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'))

module.exports = router;
