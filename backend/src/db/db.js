const mongoose= require("mongoose")
const dotenv= require("dotenv")
dotenv.config()



const connect=async()=>{
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("Database connected");
        
    }).catch((error)=>{
        console.log("Database not connected", error); 
    })
}

module.exports=connect