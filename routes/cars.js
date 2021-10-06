const express = require('express');
const router = express.Router();

const cars_Controller = require('../controller/carsController');

router.get('/', cars_Controller.home);

module.exports = router;