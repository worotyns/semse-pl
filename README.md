semse-pl
=========

Implementation of SEMSE.pl for node.js, based orginaly on SMSAPI.pl package (smsapi-pl) authored by @Pawerda
Version 0.0.1

## Usage:
```text
$npm install semse-pl
```
#### then:

```javascript
    senderConfig = {
      api_key: 'key',
      api_secret: 'secret'
    }

    sender = sms.setSender(senderConfig),

    msg = new sms.Message();
    msg.to('79079XXXX').message('Siema');
    sender.send(msg, function(err, response){
        console.log(err, response)
    });
```