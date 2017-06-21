var newsDao = require('../dao/order.server.dao');

module.exports = function(app){	
   	app.route('/newsSoftAlll').get(newsDao.newsgetallsoft);
      
}