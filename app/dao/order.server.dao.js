//var query = require('../../config/dbconnection');
var newssql = require('../mapping/order.server.sqlmapping.js');
var code = require('../mapping/code');
var selectnews;// = require('../../config/RedisConnection');
var url = require('url');
var querys = require('../../config/dbconnectionres');

function timevalGet(sdate){
    var regEx = new RegExp("\\-","gi");
   var date=sdate.replace(regEx,"/");
    var milliseconds=Date.parse(date);
    var now = new Date();
    var timeval = (now.getTime() - milliseconds)/1000/3600/24;
     return timeval;
}

function getnum(){
      var num = Math.random()*10;
      num = Math.round(num);
      return num;
}

function gettime(datetime){
   var hour = datetime.getHours();
   if(hour <10){
     hour = "0"+hour;
   }
   var minu = datetime.getMinutes();
   if(minu < 10){
     minu = "0" + minu;
   }  
   var sec = datetime.getSeconds();
   if(sec < 10){
     sec ="0" + sec;
   }
   return hour+":"+minu+":"+sec;
}


function getdate(time){
    var month = time.getMonth()+1;
    var day = time.getDate();
    if(month < 10){
      month = "0"+month;
    }
    if(day<10){
       day = "0"+day;
    }

   return time.getFullYear()+"-"+month+"-"+day;      
}

function getfulltime(datetime){
   return getdate(datetime)+" "+gettime(datetime);
}

function getbegintime(){
   var time = new Date(); 
   time = time - 6*30*24*60*60*1000;
   return time;
}

String.prototype.format= function(){
       var args = arguments;
       return this.replace(/\{(\d+)\}/g,function(s,i){
         return args[i];
       });
}

module.exports = {
       //PC端获取初始新闻
       newsgetallsoft:function(req, res, callback){
          var result = new Object();
          result.code = code.newsallPC;
          selectnews(function(err,results){
              if(err){
                console.log("get error:"+ err.message);
                     result.success = code.fail;
                     result.message = err.message; 
                     res.json(result);
                     return ;
              }
              if(results.length >0){
                result["newslist"] = results;
                result.success = code.success;
                res.json(result);
              }
          });
       }
};
 