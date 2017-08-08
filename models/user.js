const db = require('../lib/db.js');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName:String,//与person关联
    CID:String,
    verifyDate:Date,
    Name:String,
    sex:String,
    birthday:Date,
    politics:String,
    CA:String,
    education:String,
    tittle:String,
    position:String,
    retired:String,
    mail:String,
    E_mail:String,
    mobilephone:String,
    typeOfcertificate:String,
    ID:String,
    academic:String,
    aID:String,
    workAge:String,
    isPartimeL:String,
    homePhone:String,
    worklPlace:String,
    detailAddress:String,
    School:String,
    judgeField1:String,
    judgeField2:String,
    advantage:String,
    achivement:String,
    others:String,
    status:String,//审核中等
    isCommit:Boolean, //是否首次提交
    suggestion:String
});

const User = db.model('User',userSchema);

userSchema.index({userName:1,judgeField1:1,judgeField2:1,status:1});

module.exports = User;