
const mongoose=require("mongoose")

// module.exports=()=>{
//     return mongoose.connect("mongodb+srv://rajnarayana:1602raj@cluster0.u5gd4.mongodb.net/homeDepot-clone?retryWrites=true&w=majority")
    
// }

module.exports = () => {
    return mongoose.connect(
      process.env.MONGODB_URI ||
        `mongodb+srv://rajnarayana:1602raj@cluster0.u5gd4.mongodb.net/homeDepot-clone?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  };
  