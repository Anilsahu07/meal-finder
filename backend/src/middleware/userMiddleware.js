const jwt= require("jsonwebtoken")

module.exports.verifyToken=async(req,res,next)=>{
    try {
        const token= req.cookies.token
        if (!token) {
           return res.status(401).json({ message: "No token provided" }); 
        }
        const decoded= jwt.verify(token,"meal-key07")
        req.user= decoded._id

        next()
    } catch (error) {
        res.status(401).json({message:"Invalid or expired token"})
    }
}