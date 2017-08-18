var userModel = require( "../models/user");
var workExperienceModel = require( "../models/workExperience");
var userModel = require( "../models/user");
var qualityModel = require( "../models/quality");
var avoidCompanyModel = require( "../models/avoidCompany");
var experienceModel = require( "../models/experience");
var path = require("path");
var fs = require("fs");
var bodyParser = require("body-parser");

class user{
    constructor(){}

    home(req,res,next){
        res.render("userHome");
    }

    userInfo(req,res,next){
        res.render("userInfo");
    }

    getBasicInfo(req,res,next){
        var userName =  req.session.user.userName;
        if( userName == null)
            res.send("请先登录");
        else{
            userModel.findOne({userName:userName},
            "userName CID verifyDate Name sex birthday politics CA education tittle position "+
            "retired mail E_mail mobilephone typeOfcertificate ID academic aID workAge isPartimeL homePhone "+
            "worklPlace detailAddress School judgeField1 judgeField2 advantage achivement others status isCommit",
            function(err,doc){
                if(err==null){
                    res.send(doc);
                }
                else
                    res.render("error");     
            });
        }
    }

    saveBasicInfo(req,res,next){
        var userName_ =  req.session.user.userName;
        if(!userName_)
            res.send("请先登录");
        else{
            userModel.findOne({userName:userName_},function(err,doc){
                if(doc != null){
                    if( !doc.isCommit){
                        doc.Name = req.body.Name,
                        doc.sex = req.body.sex,
                        doc.birthday = req.body.birthday,
                        doc.politics=req.body.politics,
                        doc.CA=req.body.CA,
                        doc.education=req.body.education,
                        doc.tittle=req.body.tittle,
                        doc.position=req.body.position,
                        doc.retired=req.body.retired,
                        doc.mail=req.body.mail,
                        doc.E_mail=req.body.E_mail,
                        doc.mobilephone=req.body.mobilephone,
                        doc.typeOfcertificate=req.body.typeOfcertificate,
                        doc.ID=req.body.ID,
                        doc.academic=req.body.academic,
                        doc.aID=req.body.aID,
                        doc.workAge=req.body.workAge,
                        doc.isPartimeL=req.body.isPartimeL,
                        doc.homePhone=req.body.homePhone,
                        doc.worklPlace=req.body.worklPlace,
                        doc.detailAddress=req.body.detailAddress,
                        doc.School=req.body.School,
                        doc.judgeField1=req.body.judgeField1,
                        doc.judgeField2=req.body.judgeField2,
                        doc.advantage=req.body.advantage,
                        doc.achivement=req.body.achivement,
                        doc.others=req.body.others,
                        doc.status="填写中",
                        doc.save();
                    }
                }
                else{
                        var user = new userModel({
                            userName:req.session.user.userName,//与person关联
                            CID:null,
                            verifyDate:null,
                            Name : req.body.Name,
                            sex : req.body.sex,
                            birthday : req.body.birthday,
                            politics:req.body.politics,
                            CA:req.body.CA,
                            education:req.body.education,
                            tittle:req.body.tittle,
                            position:req.body.position,
                            retired:req.body.retired,
                            mail:req.body.mail,
                            E_mail:req.body.E_mail,
                            mobilephone:req.body.mobilephone,
                            typeOfcertificate:req.body.typeOfcertificate,
                            ID:req.body.ID,
                            academic:req.body.academic,
                            aID:req.body.aID,
                            workAge:req.body.workAge,
                            isPartimeL:req.body.isPartimeL,
                            homePhone:req.body.homePhone,
                            worklPlace:req.body.worklPlace,
                            detailAddress:req.body.detailAddress,
                            School:req.body.School,
                            judgeField1:req.body.judgeField1,
                            judgeField2:req.body.judgeField2,
                            advantage:req.body.advantage,
                            achivement:req.body.achivement,
                            others:req.body.others,
                            status:"填写中",
                            isCommit:false 
                        });
                        user.save(function(err){
                            if(err){
                                console.log(err);
                                res.render("error",err);
                            }
                            else{
                                    res.status(200);
                                    res.end(); 
                            }
                        });
                }
            });
        }
    }

    commitBasicInfo(req,res,next){
        console.log("======commit=========");
        var userName_ =  req.session.user.userName;
        if(!userName_)
            res.send("请先登录");
        else{
            userModel.findOne({userName:userName_},function(err,doc){
                if(doc != null){
                        doc.Name = req.body.Name,
                        doc.sex = req.body.sex,
                        doc.birthday = req.body.birthday,
                        doc.politics=req.body.politics,
                        doc.CA=req.body.CA,
                        doc.education=req.body.education,
                        doc.tittle=req.body.tittle,
                        doc.position=req.body.position,
                        doc.retired=req.body.retired,
                        doc.mail=req.body.mail,
                        doc.E_mail=req.body.E_mail,
                        doc.mobilephone=req.body.mobilephone,
                        doc.typeOfcertificate=req.body.typeOfcertificate,
                        doc.ID=req.body.ID,
                        doc.academic=req.body.academic,
                        doc.aID=req.body.aID,
                        doc.workAge=req.body.workAge,
                        doc.isPartimeL=req.body.isPartimeL,
                        doc.homePhone=req.body.homePhone,
                        doc.worklPlace=req.body.worklPlace,
                        doc.detailAddress=req.body.detailAddress,
                        doc.School=req.body.School,
                        doc.judgeField1=req.body.judgeField1,
                        doc.judgeField2=req.body.judgeField2,
                        doc.advantage=req.body.advantage,
                        doc.achivement=req.body.achivement,
                        doc.others=req.body.others,
                        doc.status="待审核",
                        doc.isCommit=true //是否首次提交
                        doc.save();
                }
                else{
                        var user = new userModel({
                            userName:req.session.user.userName,//与person关联
                            CID:null,
                            verifyDate:null,
                            Name : req.body.Name,
                            sex : req.body.sex,
                            birthday : req.body.birthday,
                            politics:req.body.politics,
                            CA:req.body.CA,
                            education:req.body.education,
                            tittle:req.body.tittle,
                            position:req.body.position,
                            retired:req.body.retired,
                            mail:req.body.mail,
                            E_mail:req.body.E_mail,
                            mobilephone:req.body.mobilephone,
                            typeOfcertificate:req.body.typeOfcertificate,
                            ID:req.body.ID,
                            academic:req.body.academic,
                            aID:req.body.aID,
                            workAge:req.body.workAge,
                            isPartimeL:req.body.isPartimeL,
                            homePhone:req.body.homePhone,
                            worklPlace:req.body.worklPlace,
                            detailAddress:req.body.detailAddress,
                            School:req.body.School,
                            judgeField1:req.body.judgeField1,
                            judgeField2:req.body.judgeField2,
                            advantage:req.body.advantage,
                            achivement:req.body.achivement,
                            others:req.body.others,
                            status:"填写中",
                            isCommit:true 
                        });
                        user.save(function(err){
                            if(err){
                                console.log(err);
                                res.render("error",err);
                            }
                            else{
                                    res.status(200);
                                    res.end(); 
                            }
                        });
                }
            });
        }
    }

    deleteOldQuality(req,res,next){
        var userName =  req.session.user.userName;
        qualityModel.deleteMany({userName:userName},function(err,data){
            if(err)
                console.log(err);
            else{
                res.status(200);
                res.end(); 
            }
        });
    }

    saveQuality(req,res,next){
        var userName =  req.session.user.userName;
        var qua = new qualityModel({
            userName:userName,
            Sname:req.body.Sname,
            Sid:req.body.Sid
        });
        qua.save(function(err){
            if(!err){
                res.status(200);
                res.end();
            }
            else{
                res.render("error",err);
            }
        });
    }

    getQuality(req,res,next){
        var userName =  req.session.user.userName;
        qualityModel.find({userName:userName},"Sname Sid",
        function(err,doc){
            if(!err){
                res.send(doc);
            }
            else{
                res.render("error",err);
            }
        });
    }

    deleteOldExperience(req,res,next){
        var userName =  req.session.user.userName;
        experienceModel.deleteMany({userName:userName},function(err,data){
            if(err){
                console.log(err); 
                res.render("error",err);
            }
        });
    }

    getExperience(req,res,next){
        var userName =  req.session.user.userName;
        experienceModel.find({userName:userName},"time name desc type",
        function(err,doc){
            if(!err){
                res.send(doc);
            }
            else{
                res.render("error",err);
            }
        });
    }

    saveExperience(req,res,next){
        var userName =  req.session.user.userName;
        var exp = new experienceModel({
            userName:userName,
            name:req.body.name,
            time:req.body.time,
            desc:req.body.desc,
            type:req.body.type
        });
        exp.save(function(err){
            if(err)
                res.render("error",err);
            else{
                res.status(200);
                res.end();
            }
        });
    }

    deleteOldWorkExperience(req,res,next){
        var userName =  req.session.user.userName;
        workExperienceModel.deleteMany({userName:userName},function(err,data){
            if(err){
                console.log(err);
                res.render("error",err);
            }
            else{
                res.status(200);
                res.end();
            }
        });
    }

    getWorkExperience(req,res,next){
        var userName =  req.session.user.userName;
        workExperienceModel.find({userName:userName},"startTime endTime workplace certifier position",
        function(err,doc){
            if(!err){
                res.send(doc);
            }
            else{
                res.render("error",err);
            }
        });
    }

    saveWorkExperience(req,res,next){
        var userName =  req.session.user.userName;
        var exp = new workExperienceModel({
            userName:userName,
            startTime:req.body.startTime,
            endTime:req.body.endTime,
            workplace:req.body.workplace,
            certifier:req.body.certifier,
            position:req.body.position
        });
        exp.save(function(err){
            if(err){
                res.render("error",err);
            }
            else{
                res.status(200);
                res.end();
            }
        });
    }

    deleteOldAvoidCompany(req,res,next){
        var userName =  req.session.user.userName;
        avoidCompanyModel.deleteMany({userName:userName},function(err,data){
            if(err){
                console.log(err); 
                res.render("error",err);
            }
            else{
                res.status(200);
                res.end();
            }
        });
    }

    getAvoidCompany(req,res,next){
        var userName =  req.session.user.userName;
        avoidCompanyModel.find({userName:userName},"name isWorkplace",
        function(err,doc){
            if(!err){
                res.send(doc);
            }
            else{
                res.render("error",err);
            }
        });
    }

    saveAvoidCompany(req,res,next){
        var userName =  req.session.user.userName;
        var exp = new avoidCompanyModel({
            userName:userName,
            name:req.body.name,
            isWorkplace:req.body.isWorkplace
        });
        exp.save(function(err){
            if(err)
                res.render("error",err);
            else{
                res.status(200);
                res.end();
            }
        });
    }

    saveImg(req,res,next){
        console.log(req.file);
        res.render("userInfo");
    }
}

const u = new user();

module.exports = u;