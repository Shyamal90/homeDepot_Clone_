const express = require("express");
const res = require("express/lib/response");
const User = require("../models/user.model");

const router = express.Router();


router.get("/",async(req,res)=>{
    try{
        const user = await User.find().lean().exec();
        return res.send(user)
    }
    catch(err){
        return res.send(err)
    }

})

router.get("/:email",async(req,res)=>{
    try{
        const user= await User.findOne({email:req.params.email}).lean().exec()
        return res.send(user)

    }
    catch(err){
        return res.send(err)
    }
})

router.post("/",async(req,res)=>{
    try {
        const user = await User.create(req.body);
        res.status(201).json({user});
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    }
})


module.exports = router;