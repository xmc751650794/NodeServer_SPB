var code = {
	success:1,                    //成功
	fail:0,                       //失败
	login_code:1001,              //登陆
	register_code:1011,           //注册
	cp_code:1021,                 //修改密码
	rp_code:1031,                 //忘记密码
	bindemail_code:1041,          //绑定邮箱
	bindphone_code:1051,          //绑定手机
	ai_code:1061,                 //账户检测
	introduction_code:1072 ,       //保存用户简介
    newsallPC:2010,               //PC初始新闻获取
	newsallAPP:2011,                 //APP所有新闻获取
	newsflush:2012,               //APP新闻刷新
	expertsall:2013,              //订阅专家新闻获取 
	expertflush:2014,             //订阅专家新闻刷新
	newsContent:2015,              //新闻具体内容
	ecomonicCal:2021,             //财经日历
	ecomonicEvent:2022            //财经事件
};
module.exports = code;