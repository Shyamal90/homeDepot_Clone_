const mongoose=require("mongoose")
const productSchema=new mongoose.Schema(
    {
    product_name:{type:String,required:true},
    manufacturer:{type:String,required:true},
    image_large:{type:String,required:true},
    image_small: [{
        image_1: { type: String,required:true}
        , image_2: { type: String,required:true}
        , image_3: { type: String,required:true}
        , image_4: { type: String,required:true}
        , image_4: { type: String,required:true}
    }] ,
    colour:[{type:String,required:true}],
    product_description:[{
        line_1: { type: String,required:true}
        , line_2: { type: String,required:true}
        , line_3: { type: String,required:true}
     
    }],
    current_price:{type:Number,required:true},
    old_price:{type:Number,required:false},
    saving:{type:Number,required:false},
    percentage:{type:Number,required:false},
    rating_id:{ type:mongoose.Schema.Types.ObjectId,
        ref:"rating",
        required:true},
    favorite_id:{ type:mongoose.Schema.Types.ObjectId,
        ref:"favorite",
        required:true},
    tag_id:[{ type:mongoose.Schema.Types.ObjectId,
          ref:"tag",
          required:true}],
 
},
{
    versionKey:false,
    timestamps:true,
}
);


module.exports=mongoose.model("product",productSchema)