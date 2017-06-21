var nodemailer  = require("nodemailer");
var user = 'leo@tradeqq.com'
  , pass = 'Fx9k8858'
  ;
var mailOptions = null;
var smtpTransport = nodemailer.createTransport("SMTP", {
      service: "QQ"
    , auth: {
        user: user,
        pass: pass
    }
 });
  
var setMailInfo = function(userEmail,subject,register_html){
	mailOptions = {
   	from    : '汇讯通团队<' + user + '>'
 	, to      :  userEmail
  	, subject :  subject
  	, html    :  register_html
	};
};

var sendEmail = function(callback){
		//setMailInfo(content);
		smtpTransport.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
                console.log(info);
	        console.log('Message sent: ');
	    }
	      console.log('test');
          callback();
	   });
};

exports.sendEmail=sendEmail;
exports.setMailInfo=setMailInfo;
