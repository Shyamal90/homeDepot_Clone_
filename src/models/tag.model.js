const mongoose = require("mongoose");


const tagSchema = new mongoose.Schema({
  product_tag:{type:String,required:true}
},
{
    versionKey:false,
    timestamps:true
})



const Tag = new mongoose.model("tag",tagSchema);

module.exports = Tag;