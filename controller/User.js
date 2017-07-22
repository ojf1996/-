var personModel = require( "../models/person");
var bodyParser = require("body-parser");

class user{
    constructor(){}

    home(req,res,next){
        res.render("userHome");
    }

    modifyPwd(req,res,next){
        var newPwd = req.body.password;
        var person = req.session.person;
        if(person){
            personModel.findOne({userName:person.userName,type:person.type},function(err,doc){
                doc.passwd = newPwd;
                doc.save();
                res.send("修改成功");
            });
        }
        else{
            res.send("请先登录");
        }
    }
}

const u = new user();

module.exports = u;