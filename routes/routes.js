var express = require('express');
var router = express.Router();


router.get('/',function(req,res,next){
	res.render('login_in',{});
});

router.get('/views/login_box',function(req,res,next){
	res.render('login_box',{});
});

router.get('/register',function(req,res,next){
	res.render('register',{});
});

module.exports = router;