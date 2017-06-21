var query = require('./dbconnection');

var sql = 'SELECT detail, resource_web,time from tb_oiq_news WHERE id = 807647 ';
query(sql,null,function(err,rows){
  var result = new Object();
  if(err){
  	console.log("get error:"+err.message);
  	return;
  }
  if(rows.length > 0){

   //  result['dbres'] = rows;
     result = rows[0];
     result.code = 1;
     result.name = 'aa';
     console.log(result['time']);
  }else{
  	console.log('no rows');
  }
 // console.log(result['dbres'].length);
 // console.log(result['dbres']['json'][0]);
});