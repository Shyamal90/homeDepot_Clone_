const mongoose=require("mongoose")
const productSchema=new mongoose.Schema(
    {
    product_name:{type:String,required:true},
    manufacturer:{type:String,required:true},
    main_image:{type:String,required:true},
    colour_btn1:{type:String,required:false},
    colour_btn2:{type:String,required:false},
    colour_btn3:{type:String,required:false},
    colour_btn4:{type:String,required:false},
    colour_btn5:{type:String,required:false},
    current_price:{type:Number,required:true},
    old_price:{type:Number,required:false},
    saving:{type:Number,required:false},
    percentage:{type:Number,required:false},
    rating:{ type:Number,required:true},
    favorite:{ type:Number,required:true},
        tag:{ type:String,required:false},
          pickup:{type:String,required:true},
          delivery:{type:String,required:true},
          image_1: { type: String,required:true}, 
          image_2: { type: String,required:true}, 
          image_3: { type: String,required:true}, 
          image_4: { type: String,required:true},
          line_1: { type: String,required:false}, 
          line_2: { type: String,required:false}, 
          line_3: { type: String,required:false},
 
},
{
    versionKey:false,
    timestamps:true,
}
);


module.exports=mongoose.model("product",productSchema)