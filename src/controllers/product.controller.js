const express=require("express")
const Product=require("../models/product.model")
const crudController = require("./crud.controller");
const router=express.Router()

router.post("", crudController(Product).post);

router.get("", crudController(Product).get);
router.get("/all", crudController(Product).getpro);
router.get("/description",async(req,res)=>{
    
        res.render('product_description.ejs')

})
router.get("/cart",async(req,res)=>{
           res.render('cart.ejs')
})
router.get("/:id", crudController(Product).getOne);
router.patch("/:id", crudController(Product).updateOne);
router.delete("/:id", crudController(Product).deleteOne);
module.exports=router;