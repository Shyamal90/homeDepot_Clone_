const express=require("express");
const userController = require("./controllers/user.controller");
const productController=require("./controllers/product.controller");
const registerController = require("./controllers/register.controller");
const loginController = require("./controllers/login.controller");
const addressController=require("./controllers/address.controller")

const path = require("path");

const static_path=path.join(__dirname,"../public")

const app=express()
app.use(express.json())
app.use(express.static(static_path))

app.set("view engine","ejs")
app.use(express.urlencoded({extender:true}))
app.use(express.static("public"))

//
app.get("/",(req,res)=>{
    res.render("index");
})
//for landing page
app.get("/index",(req,res)=>{
    res.render("index");
});

//Product Page
app.use("/products",productController)

//for register page
app.use("/register",registerController);

//for login page
app.use("/email_login",loginController);

app.use("/address",addressController)

app.use("/users",userController)

//404 Error Page
app.get("*",(req,res)=>{
    res.render("errorPage");
})

module.exports=app;