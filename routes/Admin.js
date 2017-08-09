var express = require("express");
var Admin = require("../controller/admin");
const router = express.Router()

router.get('/',Admin.home);
router.get('/ExpertList',Admin.search);
router.get('/Pages/',Admin.list);

module.exports = router;