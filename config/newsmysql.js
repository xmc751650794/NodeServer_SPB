var mysql = require('mysql');
var config = require('./config');

module.exports = function(){
	// 使用连接池，提升性能
    var pool = mysql.createPool(config.newsmysql);
    console.log(config.newsmysql);
	return pool;
};
