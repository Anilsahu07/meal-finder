const mongoose= require('mongoose')

const mealSchema= new mongoose.Schema({
    image:String,
    name:String,
    quantity:Number,
    type:String,
    date:Date,
    user:{type:mongoose.Schema.Types.ObjectId, ref:"User"}
})


const mealModel= mongoose.model("Meal", mealSchema)
module.exports= mealModel