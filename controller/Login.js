var personModel = require( "../models/person");
var userModel = require("../models/user");
var bodyParser = require("body-parser");

class Login{
	constructor(){}

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
						res.send("http://localhost:3000/Login/");
					}
					else{
						if(person.passwd == pwd && person.type == t){		
							req.session.user = {userName:person.userName,type:person.type};
							if(person.type == 1){
								console.log("user");
								res.send("http://localhost:3000/User/");
							}
							else{
								console.log("admin");
								res.send("http://localhost:3000/Admin/");
							}
						}
						else{
							res.send("http://localhost:3000/Login/");
						}
					}
				});
		}catch(err){
			console.log(err);
			res.render("error",err);
		}
	};

	register(req,res,next){
		console.log("register");
		var uName = req.body.name;
		var pwd = req.body.password;
			try{
				var p = new personModel({userName:uName,passwd:pwd,type:1});
				p.save();
				var u = new userModel({userName:uName,status:"填写中",isCommit:false});
				u.save();
				res.render('userHome');
				console.log("success sign up");
			}catch(err){
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

	loginOut(req,res,next){
		req.session.destroy(function(err){
			if(err){
				console.log(err);
				res.render("error");
			}
			else{
				res.render('userHome');
			}
		});
	}

	isLogin(req,res,next){
		console.log("check session");
        var person = req.session.user;
		console.log(person);
        if(person==null){
            res.send({
                isLogin:false,
                person_:null
            });
        }
        else{
            res.send({
                isLogin:true,
                person_:person
            });
        }
    }

	modifyPwd(req,res,next){
		console.log("modify pwd");
		var oldPwd = req.body.old;
        var newPwd = req.body.new;
        var person = req.session.user;
        if(person){
            personModel.findOne({userName:person.userName,type:person.type},"userName passwd type",function(err,doc){
                if(doc.passwd == oldPwd){
					doc.passwd = newPwd;
					doc.save();
					res.send("修改成功");
				}
				else{
					res.send("原密码错误");
				}
            });
        }
        else{
            res.send("请先登录");
        }
    }
}

const l = new Login();

module.exports = l;
