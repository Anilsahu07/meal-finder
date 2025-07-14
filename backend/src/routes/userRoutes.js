const express= require("express")
const router= express.Router()
const {getUser,loginUser,createUser,logoutUser}= require("../controllers/userController")
const middleware= require("../middleware/userMiddleware")

router.get("/",middleware.verifyToken, getUser)
router.post("/signup", createUser)
router.post("/login",loginUser )
router.get("/logout",logoutUser)


module.exports= router