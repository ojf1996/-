'use strict';
var express = require("express");
var User = require("../controller/User");
const router = express.Router()

router.get("/",User.home);
router.get("/UserInfo",User.userInfo);

module.exports = router;