const mealModel= require("../models/mealModel")

module.exports.getMeals=async(req,res)=>{

    try {
        const meals=await mealModel.find({user:req.user})
        if (meals) {
            res.status(200).json({message:"Meals fetched successfully",meals}) 
        }
    } catch (error) {
        res.status(500).json({message:"Meal fetching failed !!"})
    }
}


module.exports.createMeals=async(req,res)=>{

    const {name, quantity, type,date,image}= req.body
    try {
        const meals= await mealModel.create({
            image,
            date,
            name,
            quantity,
            type,
            user:req.user
        })

        res.status(200).json({message:"Meals created successfully",meals})
    } catch (error) {
        res.status(404).json({message:"Meals not created", error})
    }
}



module.exports.deleteMeals=async(req,res)=>{
    try {
        await mealModel.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"Meals deleted"})
    } catch (error) {
        res.status(402).json({message:"Meals not deleted"})
    }
}


module.exports.updateMeals=async(req,res)=>{
    try {
     const updatedMeal= await mealModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
     res.status(200).json({message:"Meal Updated successful", updatedMeal})
    } catch (error) {
        res.status(403).json({message:"Meal not updated !!"})
    }
}