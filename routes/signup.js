var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var personModel = require('../models/person.js');

router.get('/',function(req,res,next){
	res.render('register',{});
});


router.get('/checkUnique/:name',function(req,res,next){
	var name = req.params.name;
	var yes = personModel.findOne({ userName:name},function(err,doc){
		if(doc==null){
			res.send("yes");
		}
		else{
			res.send("no");
		}
	});	
});

module.exports = router;