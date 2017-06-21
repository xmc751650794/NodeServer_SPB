var UserDao = require('../dao/user.server.dao');

module.exports = function(app){
   	//登陆
   	app.route('/login')
   		.post(UserDao.login);
	
	//注册
	app.route('/register')
		.post(UserDao.register);
	
	//上传头像
	app.route('/uploadimg').post(UserDao.uploadimg);
    
};

