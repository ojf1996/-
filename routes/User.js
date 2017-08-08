'use strict';
var express = require("express");
var User = require("../controller/User");
const router = express.Router();
var multer = require("multer");
var upload = multer({ dest:'../public/image/user'});

router.get("/",User.home);
router.get("/UserInfo",User.userInfo);
router.post("/basicInfo",User.saveBasicInfo);
router.get("/basicInfo",User.getBasicInfo);
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