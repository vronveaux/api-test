'use strict';

var router = require('express').Router(),
  msgController = require('../controllers/msgController');

router
  .get('/helloWorld', msgController.getHelloWorld)
  .get('/byeWorld', msgController.getByeWorld)

module.exports = router;
