var express = require("express");
var users = require("./../models/UserSchema");
var multer = require("multer");
var router = express.Router();
var upload = multer({dest : "/upload"});
router.post('/upfile/:id', upload.single('file'), (req, res) => {
    users.findByIdAndUpdate(req.params.id, {$set:{img: req.file.name}},(err,resultat)=>{
        if(err) res.send(err);
        res.send(resultat)
        console.log("done");
    });
});
module.exports = router;