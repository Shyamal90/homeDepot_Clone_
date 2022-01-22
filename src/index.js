const express=require("express");




const app=express()
app.use(express.json())

app.use(express.urlencoded({extender:true}))


app.set("view engine","ejs")

app.use(express.static("public"))


const userController = require("./controllers/user.controller");
const productController=require("./controllers/product.controller");
const addressController=require("./controllers/address.controller");

app.use("/products",productController);
app.use("/users",userController);
app.use("/address",addressController);






module.exports=app;