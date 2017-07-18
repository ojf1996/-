var express = require("express");
var db = require("./lib/db.js");
var router = require("./routes/index.js");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();

var server = app.listen(3000,function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("listening at http://%s:%s",host,port);
});

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//使用routes
router(app);