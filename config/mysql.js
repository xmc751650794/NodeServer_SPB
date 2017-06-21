var mysql = require('mysql');
var config = require('./config');

module.exports = function(){
	// 使用连接池，提升性能
    var pool = mysql.createPool(config.mysql);
	require('../app/dao/user.server.dao');
    console.log(config.mysql);
	return pool;
};
