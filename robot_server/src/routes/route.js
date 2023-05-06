var express = require('express');
var router = express.Router();

const Controller = require('../controller/controller.js');

router.get('/*', Controller.Page)

module.exports = router