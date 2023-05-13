var express = require('express');
var router = express.Router();

const Controller = require('../controller/controller.js');

router.get('/page/*', Controller.Page)

// router.get('/take_photo/*',Controller.Camera)
// router.get('/print', Controller.Print)

module.exports = router