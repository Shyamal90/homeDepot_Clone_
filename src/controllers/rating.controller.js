const express=require("express")
const Rating=require("../models/rating.model")
const router=express.Router()

router.get("",async(req,res)=>{
    try{
        const ratings= await Rating.find().lean().exec()
        return res.send(ratings)
    }
    catch(err){
     return res.status(500).json({error:err.message})
    }
   
});
router.post("",async(req,res)=>{  //creating documents
    try{
        const ratings=await Rating.create(req.body)
        return res.status(201).send(ratings)
    }
    catch(err){
        console.log(err.message)
    }
})
module.exports=router;