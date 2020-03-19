var express = require("express");
var users = require("./../models/UserSchema");
var multer = require("multer");
var router = express.Router();
var upload = multer({dest : "/upload"});
router.get('/upfile/:name',function(req,res){
    res.send()
})
module.exports = router;
