var http = require('http');

var querystring = require('querystring');
var sendsms = function sendsms(phonenumber,code,callback){
    var  postData = {
         cdkey:'8SDK-EMY-6699-RFZMN',
         password:'287159',
         phone:'15651126983',
         message:'【汇讯通】您本次操作的验证码为:',
      //   addserial:'',
         type:'json'
     };
     postData.phone = phonenumber;
     postData.message = postData.message + code;
     var sendcontent = querystring.stringify(postData);
     var options = {
        host:'hprpt2.eucp.b2m.cn',
        path:'/sdkproxy/sendsms.action',
        port:8080,
        method:'post',
       // agent:false,
       // rejectUnauthorized : false,
        headers:{
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Content-Length' :sendcontent.length
         }
     };
     var req = http.request(options,function(res){
          res.setEncoding('utf8');
          res.on('data', function (chunk) {
                console.log(chunk);
          }); 
      });
      console.log(sendcontent);
      req.on('error',function(e){
        console.log(e.message);
      });
      req.write(sendcontent);
      req.end();
      console.log('sendsms');
      callback();
};

module.exports = sendsms;
