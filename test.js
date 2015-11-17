
var sms = require('./'),
    sender = sms.setSender({
      api_key: '',
      api_secret: ''
    }),

    msg = new sms.Message();
    msg.to('').message('Hello world!');
    sender.send(msg, function(err, response){
        console.log(err, response)
    });
