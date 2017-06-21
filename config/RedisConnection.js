var redis = require('redis'),
//config = require('./config/config'),
//client = redis.createClient({port:6379, host : '127.0.0.1',opts:{}});
client.auth('redispwd',function(){
	 console.log('认证成功');
});
// client.on('ready', function(res){
//    console.log('ready');
// });

var selectnews =  function(callback){
      client.on('connect',function(err){
      	  if(err){
      	  	console.log('error');
            callback(err,null);
      	  }
      	  //console.log('connect');
            client.lrange('newslist',0,499,function(err,results){
                 // var str = JSON.stringify(results);
                 // var datas = JSON.parse(str);
                 // for(var i  = 0; i< datas.length ;i++){
                 // 	 console.log(datas[i]);
                 // }
                 client.quit();
                 callback(err,results);
            });
      });
};

module.exports = selectnews;
