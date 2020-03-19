var express = require("express");
var bodyParser= require("body-parser");
var db = require ('./db/dataBase');
var userApi = require('./api/userApi')
var todos = require('./api/toDoApi')
// var router = express.Router();
var app = express();
var affectToDoToUser = require('./api/affectToDoToUser');
var deleteToDoFromUser= require('./api/deleteToDoFromUser');
var nodemailer = require('nodemailer');
var mailer = require('./api/mailer');
var multer = require('multer');
var image = require('./api/savepictures');
const passport = require('passport');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use("/users",userApi);
app.use("/todos",todos)
app.use("/affectToDoToUser",affectToDoToUser);
app.use("/deleteToDoFromUser",deleteToDoFromUser);
app.use("/mailer",mailer);
app.use("/image",image);
app.use(passport.initialize());
app.use(passport.session());
app.listen(3000,function(){
    console.log("running"+3000); 
});