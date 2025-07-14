const userModel= require("../models/userModel")
const jwt= require("jsonwebtoken")
const bcrypt= require("bcryptjs")



module.exports.getUser=async(req,res)=>{
    try {
        const user= await userModel.find()
        res.json({message:"Users fetched successfully", user})
    } catch (error) {
        res.status(402).json({message:"User not fetched",error})
    }
}


module.exports.createUser=async(req,res)=>{
    const {image,username,email,password}= req.body
    
    try {
        const findByEmail= await userModel.findOne({email})
        if (findByEmail) {
            return res.status(409).json({ message: "Email already exists" });
        }

        const hashPassword= await bcrypt.hash(password,10)

        const user= await userModel.create({
            image,
            username,
            email,
            password:hashPassword,
        })

        const token= jwt.sign({
            _id:user._id,
            email:user.email
        }, "meal-key07")

        if (!token) {
            return res.status(500).json({ message: "No token generated" });
        }
        res.cookie("token", token)
        res.status(201).json({message:"User created", user,token})

    } catch (error) {
        res.status(500).json({message:"User not created", error})
    }
}




module.exports.loginUser=async(req,res)=>{
    
    try {
        const {email,password}= req.body
        const user= await userModel.findOne({email})

        if (!user) {
           return res.status(404).json({message:"User not found"})
        }

        const isMatched= await bcrypt.compare(password,user.password)
        
        if (!isMatched) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token= jwt.sign({
            _id:user._id,
            email:user.email
        },"meal-key07")

        res.cookie("token", token,{
             httpOnly: true,
             secure: true,           
             sameSite: "None",       
             maxAge: 1000 * 60 * 60
        })

        res.status(201).json({message:"Login Successful", token, user})
    } catch (error) {
       return res.status(500).json({message:"Login Failed"})
    }
}

module.exports.logoutUser=(req,res)=>{
    res.clearCookie("token")
    res.status(200).json({ message: "Logged out successfully" });
}