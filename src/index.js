const express=require("express");




const app=express()
app.use(express.json())

const userController = require("./controllers/user.controller");
const productController=require("./controllers/product.controller");

app.use("/products",productController)
app.use("/users",userController);




module.exports=app;