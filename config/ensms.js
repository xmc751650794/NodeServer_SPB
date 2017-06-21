var https = require('https');

var ensendsms = function sendsms(phonenumber,code,callback){
	    var sendtext = 'TradeQQ Verification code: '+code;
	    var strphone = phonenumber.toString();
	    var sendphone = 'TradeQQ';
		if(strphone.length==11 && strphone[0]==1){
		   sendphone ='12402249836';
		}

		var data = JSON.stringify({
		 api_key:'14d0cb52',
		 api_secret:'ca4d9f49',
		 to:phonenumber,
		 from:sendphone,
		 text:sendtext
		});
		var options = {
		 host:'rest.nexmo.com',
		 path:'/sms/json',
		 port:443,
		 method:'POST',
		 headers:{
		   'Content-Type':'application/json',
		   'Content-Length':Buffer.byteLength(data)
		 }
		};
		
		var req = https.request(options,function(res){
          res.setEncoding('utf8');
          res.on('data', function (chunk){
                console.log(chunk);
          }); 
          
       });

	   req.on('error',function(e){
         console.log(e.message);
       });
		req.write(data);
		req.end();
		callback();
}

module.exports = ensendsms;

