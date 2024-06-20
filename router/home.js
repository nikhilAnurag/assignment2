const express = require('express');
const homecontrollers = require('../controllers/home');
const router = express.Router();

router.get('/',homecontrollers.homePage);

module.exports = router;