const express=require("express")
const Favorite=require("../models/favorite.model")
const router=express.Router()

router.get("",async(req,res)=>{
    try{
        const favorites= await Favorite.find().lean().exec()
        return res.send(favorites)
    }
    catch(err){
     return res.status(500).json({error:err.message})
    }
   
});
router.post("",async(req,res)=>{  //creating documents
    try{
        const favorites=await Favorite.create(req.body)
        return res.status(201).send(favorites)
    }
    catch(err){
        console.log(err.message)
    }
})
module.exports=router;