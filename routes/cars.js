const express = require('express');
const router = express.Router();

const cars_Controller = require('../controller/carsController');

router.get('/', cars_Controller.home);
router.get('/cars', cars_Controller.cars );
router.get('/cars/id',cars_Controller.id)


module.exports = router;