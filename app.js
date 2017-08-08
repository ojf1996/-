var express = require("express");
var db = require("./lib/db.js");
var router = require("./routes/index.js");
var path = require("path");
var connectMongo = require("connect-mongo");
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var app = express();

var server = app.listen(3000,function(){
	var host = server.address().address;
	var port = server.address().port;	
	console.log("listening at http://%s:%s",host,port);
});

const MongoStore = connectMongo(session);
app.use(cookieParser("fatCat"));
app.use(session({
	secret:  "fatCat",
	resave: false,
	saveUninitialized:false,
	httpOnly: true,
	secure: false,
	maxAge: 365 * 24 * 60 * 60 * 1000,
	store: new MongoStore({url:'mongodb://localhost/local'})
}));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//使用routes
router(app);