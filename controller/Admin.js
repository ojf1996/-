var userModel = require( "../models/user");
var workExperienceModel = require( "../models/workExperience");
var userModel = require( "../models/user");
var qualityModel = require( "../models/quality");
var avoidCompanyModel = require( "../models/avoidCompany");
var experienceModel = require( "../models/experience");
var bodyParser = require("body-parser");
var Promise = require("bluebird");
var moment = require("moment");

class admin{
    constructor(){}

    home(req,res,next){
        var userName_ =  req.session.user.userName;
        var type = req.session.user.type;
        if(userName_ && type == 2){
            userModel.count({status:"待审核"}).then(
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
        if(userName_ && type == 2){
            var uField = req.query.judgeField;
            var uStatus = req.query.status;
            var page = parseInt(req.query.currPage);
            if(!page)
                page = 1;
            if(page<0)
                page = 1;
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

    expertInfo(req,res,next){
        var userName_ =  req.session.user.userName;
        var type = req.session.user.type;
        if(userName_ && type == 2){
            var expertName = req.query.name;
            Promise.all([
                userModel.findOne({userName:expertName},"-isCommit"),
                avoidCompanyModel.find({userName:expertName},"-userName"),
                experienceModel.find({userName:expertName},"-userName"),
                qualityModel.find({userName:expertName},"-userName"),
                workExperienceModel.find({userName:expertName},"-userName")
            ]).then(function(re){ 
                res.render("expert",{
                    user:re[0],
                    judge:re[2],
                    quality:re[3],
                    avoid:re[1],
                    work:re[4],
                    moment:moment
                });
            }).catch(next);
        }
        else{
            res.render("login_in");
        }
    }

    accept(req,res,next){
        var userName_ =  req.session.user.userName;
        var type = req.session.user.type;
        if(userName_ && type == 2){
            console.log(req.body);
            var userName = req.body.userName;
            var cid = req.body.CID;
            var vdate = req.body.verifydate; 
            userModel.findOne({userName:userName}).then(function(doc){
                doc.status = "可用";
                doc.CID = cid;
                doc.verifyDate = vdate;
                doc.save(function(err){
                    if(!err){
                        res.status(200);
                        res.end();
                    }
                    else{
                        res.render("error",err);
                    }
                })
            }).catch(next);
        }
        else{
            res.status(404);
            res.end();
        }
    }

    reject(req,res,next){
        var userName_ =  req.session.user.userName;
        var type = req.session.user.type;
        if(userName_ && type == 2){
            console.log(req.body);
            var userName = req.body.userName;
            var cid = req.body.CID;
            var vdate = req.body.verifydate; 
            var suggestion = req.body.suggestion; 
            userModel.findOne({userName:userName}).then(function(doc){
                doc.status = "已驳回";
                doc.CID = cid;
                doc.verifyDate = vdate;
                doc.suggestion = suggestion;
                doc.save(function(err){
                    if(!err){
                        res.status(200);
                        res.end();
                    }
                    else{
                        res.render("error",err);
                    }
                })
            }).catch(next);
        }
        else{
            res.status(404);
            res.end();
        }
    }

    cancel(req,res,next){
        var userName_ =  req.session.user.userName;
        var type = req.session.user.type;
        if(userName_ && type == 2){
            console.log(req.body);
            var userName = req.body.userName;
            var cid = req.body.CID;
            var vdate = req.body.verifydate; 
            var suggestion = req.body.suggestion; 
            userModel.findOne({userName:userName}).then(function(doc){
                doc.status = "失效";
                doc.CID = cid;
                doc.verifyDate = vdate;
                doc.suggestion = suggestion;
                doc.save(function(err){
                    if(!err){
                        res.status(200);
                        res.end();
                    }
                    else{
                        console.log(err);
                        res.render("error",err);
                    }
                })
            }).catch(next);
        }
        else{
            res.status(404);
            res.end();
        }        
    }
}


const a = new admin();

module.exports = a;
