const app=require("./app");


const connect =require("./configs/db")

app.listen(process.env.PORT || 2345,async function(){
    try{
        await connect()
        console.log("listening to port 2345")
    }
    catch(err){
        console.log(err.messeage)
    }
})