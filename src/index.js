const express=require("express");
const userController = require("./controllers/user.controller");
const productController=require("./controllers/product.controller");

const path = require("path");

const static_path=path.join(__dirname,"../public")

const app=express()
app.use(express.json())
app.use(express.static(static_path))

app.set("view engine","ejs")




app.use("/users",userController);
app.use("/products",productController)




module.exports=app;