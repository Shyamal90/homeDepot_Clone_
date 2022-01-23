const express = require("express");
const router = express.Router();
const Address = require("../models/address.model");
const User = require("../models/user.model");

router.get("/checkout", (req,res)=>{
    return res.render("checkout.ejs")
})

router.get("/", async (req, res) => {
  try {
    const address = await Address.find()
      .populate({ path: "user_id", model: User })
      .lean()
      .exec();
    return res.send(address);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const address = await Address.create(req.body);
    // return res.status(201).send(address);
    return res.render("checkout.ejs")
  } catch (err) {
    console.log(err);
  }
});

// router.get("/del", async (req, res) => {
//   try{
//     console.log(11);
//     return res.render("checkout2");
//   }catch(err){}
// })

module.exports = router;