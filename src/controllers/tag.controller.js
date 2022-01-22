const express=require("express")
const Tag=require("../models/tag.model")
const router=express.Router()

router.get("",async(req,res)=>{
    try{
        const tags= await Tag.find().lean().exec()
        return res.send(tags)
    }
    catch(err){
     return res.status(500).json({error:err.message})
    }
   
});
router.post("",async(req,res)=>{  //creating documents
    try{
        const tags=await Tag.create(req.body)
        return res.status(201).send(tags)
    }
    catch(err){
        console.log(err.message)
    }
})
module.exports=router;