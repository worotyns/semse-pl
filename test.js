
var sms = require('./'),
    sender = sms.setSender({
      api_key: '3663b318be47d10650c9108f7a7d870c',
      api_secret: 'be7b99f65b8121109ccce0d7591ea5fd'
    }),

    msg = new sms.Message();
    msg.to('790793138').message('Hello world!');
    sender.send(msg, function(err, response){
        console.log(err, response)
    });