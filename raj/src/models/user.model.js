const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required:true
    },
    last_name:{
        type:String,
        required:false
    }
},
{
    versionKey:false,
    timestamps:true
})



const User = new mongoose.model("user",userSchema);

module.exports = User;