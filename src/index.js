const express=require("express");




const app=express()
app.use(express.json())

const userController = require("./controllers/user.controller");
const productController=require("./controllers/product.controller");
const ratingController = require("./controllers/rating.controller");
const favoriteController=require("./controllers/favorite.controller");
const tagController = require("./controllers/tag.controller");



app.use("/users",userController);
app.use("/products",productController)
app.use("/ratings",ratingController);
app.use("/favorites",favoriteController)
app.use("/tags",tagController)




module.exports=app;