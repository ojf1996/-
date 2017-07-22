var Login = require("./Login");
var User = require("./User");
var View = require("./views");


module.exports =  function(app){
	app.use("/Login",Login);
	app.use("/User",User);
	app.use("/views",View);
	//404
	app.use(function(req, res, next) {
		var err = new Error("Not Found");
		err.status = 404;
		next(err);
	});

	//处理错误
	app.use(function(err, req, res, next) {
	// set locals, only providing error in development
		res.locals.message = err.message;
		res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
		res.status(err.status || 500);
		res.render("error");
	});
}