var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var personModel = require('../models/person.js');

router.get('/',function(req,res,next){
	res.render('register',{});
});

router.post('/checkUnique',function(req,res,next){
	var name = req.body.name;
	var yes = personModel.findByName(name,function(err,doc){
		if(doc==null)
			return true;
		else
			return false;
	});
});

module.exports = router;