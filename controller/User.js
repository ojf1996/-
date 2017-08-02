var personModel = require( "../models/person");
var bodyParser = require("body-parser");

class user{
    constructor(){}

    home(req,res,next){
        res.render("userHome");
    }

    userInfo(req,res,next){
        res.render("userInfo");
    }
}

const u = new user();

module.exports = u;