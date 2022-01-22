const mongoose = require("mongoose");


const favoriteSchema = new mongoose.Schema({
  hearts:{type:Number,required:true}
},
{
    versionKey:false,
    timestamps:true
})



const Favorite = new mongoose.model("favorite",favoriteSchema);

module.exports = Favorite;