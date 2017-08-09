var userModel = require( "../models/user");
var workExperienceModel = require( "../models/workExperience");
var userModel = require( "../models/user");
var qualityModel = require( "../models/quality");
var avoidCompanyModel = require( "../models/avoidCompany");
var experienceModel = require( "../models/experience");
var bodyParser = require("body-parser");

class admin{
    constructor(){}

    home(req,res,next){
        var userName_ =  req.session.user.userName;
        var type = req.session.user.type;
        console.log(req.session.user);
        if(userName_ && type == 2){
            userModel.count({status:"审核中"}).then(
                function(count){
                    console.log(count);
                    res.render("adminHome",{count:count});
                }
            )
        }
        else{
            res.render("login_in");
        }
    }

    search(req,res,next){
        var userName_ =  req.session.user.userName;
        var type = req.session.user.type;
        if(userName_ && type == 2){
                res.render("admin");
        }
        else{
            res.render("login_in");
        }
    }

    list(req,res,next){
        var userName_ =  req.session.user.userName;
        var type = req.session.user.type;
        console.log(req.session.user);
        if(userName_ && type == 2){
            var uField = req.query.judgeField;
            var uStatus = req.query.status;
            var page = parseInt(req.query.currPage);
            if(!page)
                page = 1;
            if(page<0)
                page = 1;
            console.log(req.query);
            if(uField && uStatus){
                userModel.find(
                    {
                        $or:[
                            {judgeField1:uField,status:uStatus},
                            {judgeField2:uField,status:uStatus},
                        ]
                    },"userName CID Name mobilephone worklPlace status"
                ).limit(20).skip((page-1)*20).exec().then(function(re){
                    res.render("adminPage",{user:re,judgeField:uField,status:uStatus,currPage:page});
                });
            }
            else if(uField){
                userModel.find(
                    {
                     $or:[
                            {judgeField1:uField},
                            {judgeField2:uField},
                        ]
                    },
                    "userName CID Name mobilephone worklPlace status"
                ).limit(20).skip((page-1)*20).exec().then(function(re){
                    res.render("adminPage",{user:re,judgeField:uField,status:uStatus,currPage:page});
                });
            }
            else if(uStatus){
                userModel.find(
                    {status:uStatus},
                    "userName CID Name mobilephone worklPlace status"
                ).limit(20).skip((page-1)*20).exec().then(function(re){
                    res.render("adminPage",{user:re,judgeField:uField,status:uStatus,currPage:page});
                });
            }
            else{
                userModel.find(
                    {},
                    "userName CID Name mobilephone worklPlace status"
                ).limit(20).skip((page-1)*20).exec().then(function(re){
                    res.render("adminPage",{user:re,judgeField:uField,status:uStatus,currPage:page});
                });
            }
        }
        else{
            res.render("login_in");
        }
    }
}


const a = new admin();

module.exports = a;
