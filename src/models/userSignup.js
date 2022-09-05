const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    emailId:{
        type:String,
        unique: true,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    confirmPassword:{
        type:String,
        required: true
    }, 
   
});

const Users = new mongoose.model("Users", userSchema);
module.exports = Users ;



