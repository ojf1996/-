var express = require('express')
var app = express();
var router = require('./routes/routes.js');
var path = require('path');

var server = app.listen(3000,function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('listening at http://%s:%s',host,port);
});

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static('public'));

//使用routes
app.use('/',router);

//404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//处理错误
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});





