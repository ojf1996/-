var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var personModel = require("../models/person.js");

router.get("/",function(req,res,next){
	res.render("register",{});
});

router.get("/checkUnique/:name",function(req,res,next){
	var name = req.params.name;
	console.log("check unique");
	var yes = personModel.findOne({ userName:name},function(err,doc){
		if(doc==null){
			res.send("yes");
		}
		else{
			res.send("no");
		}
	});	
});

router.post("/signup/",function(req,res,next){
	console.log("收到了什么");
	res.sendStatus(200).end();
});


module.exports = router;