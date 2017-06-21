var mysql = require('../../config/mysql');
var sql = require('../mapping/user.server.sqlmapping');
var code = require('../mapping/code');
var pool = mysql();
var url = require('url');
//var newsredis = require('newsredis.js');
var formidable = require("formidable");
var  fs = require("fs");
var querys = require('../../config/dbconnectionres');

module.exports = {
     //登陆
    login: function(req, res, next) {
        console.log('login');
        console.log(new Date())
        console.log(req.body);
    },
    //注册
    register: function(req, res, next) {
        console.log('register');
        var account_type = req.body.account_type;
        var userAddSql = null;
        var userAddSql_Params = null; //参数设置
    },
    //上传头像
    uploadimg:function(req, res, next){
            var result = {};
            console.log('uploadimg');
           var form = new formidable.IncomingForm();
           form.uploadDir = '/home/hanqiang/img/'; 
          form.encoding = 'utf-8';        //设置编辑
         // form.uploadDir = 'public' + AVATAR_UPLOAD_FOLDER;     //设置上传目录
          form.keepExtensions = true;     //保留后缀
          form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
        form.parse(req, function(err, fields, files) {
            if (err) {
              console.log("解析错误");
               console.log(err);
               result.success = -1;
               res.json(result);
              return;        
            }    
            if(files.avatar == null){
               console.log("文件为空");
               result.success = -1;
               res.json(result); 
               return ; 
            }
            console.log(files);
          //  console.log(files.fulAvatar.path);
            var extName = '';  //后缀名
            switch (files.avatar.type) {
                case 'image/pjpeg':
                    extName = 'jpg';
                    break;
                case 'image/jpeg':
                    extName = 'jpg';
                    break;         
                case 'image/png':
                    extName = 'png';
                    break;
                case 'image/x-png':
                    extName = 'png';
                    break;         
            }

            if(extName.length == 0){
                   console.log("格式错误");
                    result.success = -1;
                    res.json(result);
                  return;                   
            }
            var avatarName = files.avatar.name + '.' + extName;
            var newPath = form.uploadDir + avatarName;
            if(files.avatar.path !=null){
              fs.renameSync(files.avatar.path, newPath);  //重命名
            }
            var imgurl = "img/"+ avatarName;
            var sqlexec = sql.update_userimg;
            var sqlparam = [imgurl,files.avatar.name]; //参数设置
             querys.userinsert(sqlexec, sqlparam, function(result)
             {
                console.log(result);
                res.json(result);
             });
        });
    }
};
