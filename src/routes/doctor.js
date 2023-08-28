const express = require('express');
const router = express.Router();

const doctorController = require('../app/controllers/DoctorController');

router.use('/',doctorController.home);

module.exports = router;