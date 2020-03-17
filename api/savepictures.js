var express = require("express");
var users = require("./../models/UserSchema");
var multer = require("multer");
var router = express.Router();
var upload = multer({dest : "/upload"});
router.post('/uploadfile/:id', upload.single('file'), (req, res) => {
    const file = req.file
    users.findByIdAndUpdate(req.params.id, {$set:{profileImage: file.originalname}},(err,resultat)=>{
        if(err) res.send(err);
        res.send(resultat)
        console.log("yemc hi");
    });
});
module.exports = router;