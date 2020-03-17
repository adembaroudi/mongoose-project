var mongoose = require("mongoose");
var todoschema = new mongoose.Schema({
    cars : String 
})
module.exports = mongoose.model("cars",todoschema)