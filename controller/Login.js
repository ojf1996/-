var personModel = require( "../models/person");
var bodyParser = require("body-parser");

class Login{
	constructor(){
		this.login = this.login.bind(this);
		this.register = this.register.bind(this);
		this.checkUserName = this.checkUserName.bind(this);
	}

	login (req,res,next){
		try{
			    console.log(req.body);
				var uName =req.body.userName;
				var pwd = req.body.password;
				var t = req.body.type;
				var query = personModel.findOne({userName:uName},"userName passwd type",
				function(err,person){
					if(err)
						console.log(err);
					console.log(person);
					if(person==null){
						res.send("请确定确定用户名是否正确");
					}
					else{
						if(person.passwd == pwd && person.type == t)
							res.render("form",{});
						else if(person.type == t){
							res.send("密码错误");
						}
						else{
							res.send("你不是管理员");
						}
					}
				});
		}catch(err){
			console.log(err);
			res.render("error",err);
		}
	};

	register(req,res,next){
		var uName = req.body.name;
		var pwd = req.body.password;
			try{
				var p = new personModel({userName:uName,passwd:pwd,type:1});
				p.save(function(err){
					if(err)
						console.log(err);
					else{
						res.render('relocate');
						console.log("success login in");
					}
				});
			}catch(err){
				console.log(err);
				res.render("error",err);
			}
	};

	 checkUserName(req,res,next){
		var name = req.params.name;
			try{
				personModel.findOne({ userName:name},function(err,doc){
					if(doc==null){
						res.send("yes");
					}
					else{
						res.send("no");
					}
				});	
			}catch(err){
				console.log(err);
				res.render("error",err);
				return;
			}
	};

	 home(req,res,next){
		res.render("login_in");
	};

	 signup(req,res,next){
		res.render("register");
	};

	 simpleLoginIn(req,res,next){
		res.render("login_box");
	};
}

module.exports = new Login();
