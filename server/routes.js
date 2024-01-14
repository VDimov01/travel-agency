const router = require('express').Router();

const holidayController = require('./controllers/holidayController.js');
const locationController = require('./controllers/locationController.js');
const reservationController = require('./controllers/reservationController.js');

router.use('/holidays', holidayController);

router.use('/locations', locationController);

router.use('/reservations', reservationController);

module.exports = router;