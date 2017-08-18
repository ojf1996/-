var express = require("express");
var Admin = require("../controller/Admin");
const router = express.Router();

router.get('/',Admin.home);
router.get('/ExpertList',Admin.search);
router.get('/Pages/',Admin.list);
router.get('/Expert',Admin.expertInfo);
router.post('/Reject',Admin.reject);
router.post('/Cancel',Admin.cancel);
router.post('/Accept',Admin.accept);

module.exports = router;