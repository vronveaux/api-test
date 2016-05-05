'use strict';

var msgController = {
  getHelloWorld: function getHelloWorld (req, res, next){
    res.send('Hello World!');
  },
  getByeWorld: function getByeWorld(req, res, next){
    res.send('Bye World!');
  }
}

module.exports = msgController;
