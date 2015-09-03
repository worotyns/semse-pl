'use strict';
var extend = require('extend');

var Message = function (options) {
  this._data = {};
  options ? extend(this._data, options) : null;
};

Message.prototype.to = function (reciver) {
  var receivers = this._data.to;

  function isReceiverValid(receiver) {
    var clean_number = typeof receiver == 'string' || typeof receiver == 'number' ?
      parseInt(receiver).toString() : null;

    return clean_number ? clean_number.length == 11 || clean_number.length == 9 : null;
  }

  this._data.to = reciver;
  return this;

};

Message.prototype.message = function (msg) {
  if (typeof msg == 'string') this._data.message = msg;
  return this;

};

module.exports = Message;

npm set init.author.name "Mateusz Wu"
npm set init.author.email "worotyns@hotmail.com"
npm set init.author.url "http://porannakawka.com"

