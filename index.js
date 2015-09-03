'use strict';

exports.Message = require('./lib/message.js');
exports.API = require('./lib/config.js');
exports.setSender = function(senderConfig){
     return exports.sender = new exports.API(senderConfig);
};
