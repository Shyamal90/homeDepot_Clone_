const mongoose=require("mongoose")
const productSchema=new mongoose.Schema(
    {
    product_name:{type:String,required:true},
    product_type:{type:String,required:false},
   
    
},
{
    versionKey:false,
    timestamps:true,
}
);


module.exports=mongoose.model("product",productSchema)