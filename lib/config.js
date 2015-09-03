'use strict';

var request = require('request'),
  extend = require('extend'),
  Q = require('q'),
  handleErrors = require('./errorHandler.js');


var semse = function (senderConfig) {
  var defaultConfig = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    url: 'https://api.semse.pl/v2/sms',
    form: {}
  };

  this.senderConfig = senderConfig || {};
  this.config = defaultConfig;

};

function isRequestFormValid(requestData){
  var form = requestData.form;
  return typeof form.api_key === 'string' && typeof form.api_secret === 'string' && form.to && form.message;
}

semse.prototype.apiKey = function (apiKey) {
  if (typeof apiKey === 'string')
    this.senderConfig.api_key = apiKey;
};

semse.prototype.apiSecret = function (apiSecret) {
  if (typeof apiSecret === 'string')
    this.senderConfig.api_secret = apiSecret;
};

semse.prototype.url = function (url) {
  if (typeof url === 'string')
    this.config.url = url;
};

semse.prototype.polishChars = function (polishChars) {
  if (typeof polish_chars === 'number')
    this.config.polish_chars = polishChars;
};

semse.prototype.gateway = function (gateway) {
  if (typeof gateway === 'string' && gateway.length === 10)
    this.config.url = gateway;
};

semse.prototype.send = function (message, callback) {
  var requestData = {},
    status;

  extend(true, requestData, this.config);
  extend(true, requestData.form, this.senderConfig, message._data || message);

  if (!isRequestFormValid(requestData)) {
    callback(new Error('semse Sender: apiKey, apiSecret, and form.to are required!'))
  } else {
    console.log(requestData);
    request.post(requestData,
      function (error, response, body) {
        error = handleErrors(error, body);

        if (!error) status = body;

        callback(error, status);
      }
    );
  }
};

semse.prototype.promise = function (message) {
  var promise = Q.defer();
  this.send(message, function(error, status){
    if(error) promise.reject(error)
    else promise.resolve(status)
  });

  return promise.promise;
};

module.exports = semse;