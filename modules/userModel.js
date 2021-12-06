
const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required : true 
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:Number,
        unique:true
    }
});



module.exports = new mongoose.model("Users",userSchema); // schema for database collection 