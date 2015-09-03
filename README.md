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
    sender = sms.setSender({
      api_key: 'key',
      api_secret: 'secret'
    }),

    msg = new sms.Message();
    msg.to('79079XXXX').message('Siema');
    sender.send(msg, function(err, response){
        console.log(err, response)
    });
```

##### or create a local sender object.

```javascript
var sender = new sms.API(senderConfig)
```