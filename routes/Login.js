'use strict';
var express = require("express");
var Login = require("../controller/Login");
const router = express.Router()

router.get('/',Login.home);
router.post('/',Login.login);
router.get('/checkUnique/:name',Login.checkUserName);
router.post('signup',Login.register);
router.get('/signup',Login.signup);
router.get('/simpleLogin',Login.simpleLoginIn);
router.get("/status",Login.isLogin);
router.get("/logout",Login.loginOut);
router.post("/modifyPwd",Login.modifyPwd);

module.exports = router;