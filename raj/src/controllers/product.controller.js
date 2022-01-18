const express=require("express")
const Product=require("../models/product.model")
const router=express.Router()

router.get("",async(req,res)=>{
    try{
        const products= await Product.find().lean().exec()
        return res.send(products)
    }
    catch(err){
     return res.status(500).json({error:err.message})
    }
   
});
router.post("",async(req,res)=>{  //creating documents
    try{
        const post=await Product.create(req.body)
        return res.status(201).send(post)
    }
    catch(err){
        console.log(err.message)
    }
})
module.exports=router;