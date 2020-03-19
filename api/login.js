var express = require("express");
var users = require("./../models/UserSchema")
var loginschema =require("./../models/loginSchema")
var router = express.Router();
router.post("/login",(req,res)=>{
    loginschema.create( users.findOne((req.body.email || req.body.userName && req.body.password),(err,resultat)=>{
        if (err) res.send(err);
        res.send(resultat);
        console.log("gazouz");
    }));
});
module.exports = router;