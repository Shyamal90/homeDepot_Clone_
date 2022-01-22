const express = require("express");
const User = require("../models/user.model");

const router = express.Router();


router.post("/",async(req,res)=>{
    try {
        const user = await User.create(req.body);
        console.log(user);
        res.status(201).json({user});
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    }
})


module.exports = router;