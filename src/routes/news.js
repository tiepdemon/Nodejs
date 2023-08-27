const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/home',newsController.index);

module.exports = router;