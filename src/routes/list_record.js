const express = require('express');
const router = express.Router();

const list_recordController = require('../app/controllers/ListRecordController');

router.use('/',list_recordController.home);

module.exports = router;