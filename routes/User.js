'use strict';
var express = require("express");
var path = require("path");
var User = require("../controller/User");
const router = express.Router();
var multer = require("multer");
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,"../public/image/user"));
    },
    filename:function(req,file,cb){
        cb(null,req.session.user.userName+".jpg");
    }
});
var upload = multer({ storage:storage});

router.get("/",User.home);
router.get("/UserInfo",User.userInfo);
router.post("/basicInfo",User.saveBasicInfo);
router.get("/basicInfo",User.getBasicInfo);
router.post("/commitBasicInfo",User.commitBasicInfo);
router.get("/getQuality",User.getQuality);
router.post("/deleteOldQuality",User.deleteOldQuality);
router.post("/saveQuality",User.saveQuality);
router.post("/saveExperience",User.saveExperience);
router.get("/getExperience",User.getExperience);
router.post("/deleteOldExperience",User.deleteOldExperience);
router.post("/saveWorkExperience",User.saveWorkExperience);
router.get("/getWorkExperience",User.getWorkExperience);
router.post("/deleteOldWorkExperience",User.deleteOldWorkExperience);
router.post("/saveAvoidCompany",User.saveAvoidCompany);
router.get("/getAvoidCompany",User.getAvoidCompany);
router.post("/deleteOldAvoidCompany",User.deleteOldAvoidCompany);
router.post("/selectImg",upload.single("photo"),User.saveImg);

module.exports = router;