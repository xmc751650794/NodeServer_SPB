var express = require('express');
var bodyParser = require('body-parser');
module.exports = function(){
	console.log('int express .....');
	var app = express();
	//app.use(require('connect').bodyParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
	app.all('*',function (req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
		res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	
		if (req.method == 'OPTIONS') {
			res.sendStatus(200); /让options请求快速返回/
		}
		else {
			next();
		}
	});
	app.route('/*').get(function(req,res,next){
         var str = req.get('User-Agent');
         var index = str.indexOf('AliYunDun');
         if(index >=0){
            res.status(403);
            res.json('Forbidden');
         }
         else{
           next();
         }
         	
	});

	require('../app/routes/user.server.routes')(app);
	require('../app/routes/order.server.routes')(app);

	app.use(function(req,res,next){
		res.status(404);
		try{
			return res.json('Not Found ....');
		}catch(e){
			//TODO handle the exception
			console.error('404 set header after sent ...');
		}
	});
	
	app.use(function(err,req,res,next){
		if(!err){ return next()}
		res.status(500);
		try{
			return res.json(err.message || 'server error ....');
		}catch(e){
			//TODO handle the exception
			console.error('500 set header after sent ...');
		}
	});

	return app;
};
