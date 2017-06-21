var mysql = require('mysql');
var config = require('./config');
var pool = mysql.createPool(config.newsmysql);


var userpool = mysql.createPool(config.mysql);

var queryres={
    userselect:function(sql,sqlparam,callback){
        userpool.getConnection(function(err,conn){
            var result = new Object();
            if(err){
                result.success = 0;
                result.message = err.message;
                console.log('select error:'+err.message);
            }else{
                conn.query(sql,sqlparam,function(qerr,rows){
                    //释放连接
                    conn.release();
                    if(qerr){
                       result.success = 0;
                       result.message = qerr.message;
                       console.log('select error:'+qerr.message);  
                    }else{
                       if(rows.length > 0){
                         result['dbres'] = rows; 
                         result.success = 1;
                       }else{
                         console.log('no results');
                         result.success = 0;
                       }
                    }
                    //事件驱动回调
                    callback(result);
                });
            }
        });
    },
    userinsert:function(sql,sqlparam,callback){
        userpool.getConnection(function(err,conn){
            var result = new Object();
            if(err){
                result.success = 0;
                result.message = err.message;
                console.log('insert error:'+err.message);
            }else{
                conn.query(sql,sqlparam,function(qerr,rows){
                    //释放连接
                    conn.release();
                    if(qerr){
                       result.success = 0;
                       result.message = qerr.message;
                       console.log('insert error:'+qerr.message);  
                    }else{
                        console.log(rows);
                        result.success = 1;
                    }
                    //事件驱动回调
                    callback(result);
                });
            }
        });
    },
    selectRes:function(lang,sql,sqlparam,callback){
        var mpool = selectpool(lang);
        mpool.getConnection(function(err,conn){
            var result = new Object();
            if(err){
                result.success = 0;
                result.message = err.message;
                console.log('select error:'+err.message);
            }else{
                conn.query(sql,sqlparam,function(qerr,rows){
                    //释放连接
                    conn.release();
                    if(qerr){
                       result.success = 0;
                       result.message = qerr.message;
                       console.log('select error:'+qerr.message);  
                    }else{
                       if(rows.length > 0){
                         result['dbres'] = rows; 
                         result.success = 1;
                       }else{
                         console.log('no results');
                         result.success = 0;
                       }
                    }
                    //事件驱动回调
                    callback(result);
                });
            }
        });
    },
    SelectOne:function(lang,sql,sqlparam,callback){
        var mpool = selectpool(lang);
        mpool.getConnection(function(err,conn){
            var result = new Object();
            if(err){
                result.success = 0;
                result.message = err.message;
                console.log('select error:'+err.message);
            }else{
                conn.query(sql,sqlparam,function(qerr,rows){
                    //释放连接
                    conn.release();
                    if(qerr){
                       result.success = 0;
                       result.message = qerr.message;
                       console.log('select error:'+qerr.message);  
                    }else{
                       if(rows.length > 0){
                         result.dbres = rows[0]; 
                         result.success = 1;
                       }else{
                         console.log('no results');
                         result.success = 0;
                       }
                    }
                    //事件驱动回调
                    callback(result);
                });
            }
        });
    },
    insert:function(lang,sql,sqlparam,callback){
            var mpool = selectpool(lang);
            mpool.getConnection(function(err,conn){
            var result = new Object();
            if(err){
                result.success = 0;
                result.message = err.message;
                console.log('insert error:'+err.message);
            }else{
                conn.query(sql,sqlparam,function(qerr,rows){
                    //释放连接
                    conn.release();
                    if(qerr){
                       result.success = 0;
                       result.message = qerr.message;
                       console.log('insert error:'+qerr.message);  
                    }else{
                        console.log(rows);
                        result.success = 1;
                    }
                    //事件驱动回调
                    callback(result);
                });
            }
        });
    }
};

module.exports = queryres;
