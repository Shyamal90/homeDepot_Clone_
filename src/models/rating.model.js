const mongoose = require("mongoose");


const ratingSchema = new mongoose.Schema({
  stars:{type:Number,required:true}
},
{
    versionKey:false,
    timestamps:true
})



const Rating = new mongoose.model("rating",ratingSchema);

module.exports = Rating;