const mongoose= require('mongoose')

const userSchema= new mongoose.Schema({
    image:String,
    username:String,
    email:String,
    password:String,
})


const userModel= mongoose.model("User", userSchema)
module.exports=userModel