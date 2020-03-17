var mongoose = require("mongoose");
var users = new mongoose.Schema({
    userName : String , 
    email : String , 
    password : String,
    todos: [{type: mongoose.Schema.Types.ObjectId, ref: 'cars'}]
})
module.exports = mongoose.model("user",users)