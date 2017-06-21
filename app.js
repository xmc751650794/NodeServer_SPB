var express = require('./config/express');
var app = express();


app.all('*',function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

	if (req.method == 'OPTIONS') {
		res.send(200); /让options请求快速返回/
	}
	else {
		next();
	}
});


module.exports = app;
