 	var XMLWriter = require('xml-writer');
 	var fs = require('fs');
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate
    return currentdate;
}

var xmlresult = function(res){
   

    var pubdate =getNowFormatDate();


	xw = new XMLWriter;
	xw.startDocument('1.0', 'utf-8');
	xw.startElement('rss');
	xw.writeAttribute('version', '2.0');
	xw.writeAttribute('xmlns:content', 'http://purl.org/rss/1.0/modules/content/');
	xw.writeAttribute('xmlns:wfw', 'http://wellformedweb.org/CommentAPI/');
	xw.writeAttribute('xmlns:dc', 'http://purl.org/dc/elements/1.1/');
	xw.writeAttribute('xmlns:atom', 'http://www.w3.org/2005/Atom');
	xw.writeAttribute('xmlns:sy', 'http://purl.org/rss/1.0/modules/syndication/');
	xw.writeAttribute('xmlns:slash', 'http://purl.org/rss/1.0/modules/slash/');
	xw.startElement('channel');
	for(var i =0;i< res.length;i++){
		var xw2 = new XMLWriter;
		var xw3 = new XMLWriter;
		xw2.startElement('item');
		xw2.writeElement('title',res[i].index_name);
		xw2.writeElement('pubDate',pubdate);
	    xw2.writeElement('link','www.tradeqq.com');
		//xw2.writeElement('description','baidu');
        xw3.startElement('description');
        xw3.writeElement('pubtime',res[i].t_time);
        xw3.writeElement('country',res[i].country);
        xw3.writeElement('importance',res[i].importance);
        xw3.writeElement('lastValue',res[i].front_value);
        xw3.writeElement('expertValue',res[i].forecast_value);
        xw3.writeElement('realValue',res[i].real_value);
        xw3.writeElement('star',res[i].star);
        xw3.endDocument();
        xw2.writeRaw(xw3);
		xw2.endDocument();
		xw.writeRaw(xw2);
	}
	xw.endDocument();
	xw.endDocument();
	xw.endDocument();
 
	//console.log(xw.toString());
	fs.writeFile('first.xml', xw.toString(),  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
   });
	return xw.toString();
}

module.exports = xmlresult;
