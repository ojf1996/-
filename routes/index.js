module.exports = function(app){
	app.get('/',function(req,res,next){
		res.render('login_in',{});
	});
	app.get('/views/login_box',function(req,res,next){
		res.render('login_box',{});
	});
	app.use('/register',require('./signup'));
	
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
};
