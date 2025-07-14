const express= require("express")
const router= express.Router()
const {getMeals,createMeals,deleteMeals,updateMeals}= require("../controllers/mealController")
const middleware= require("../middleware/userMiddleware")



router.get("/", middleware.verifyToken,getMeals)
router.post("/create",middleware.verifyToken, createMeals)
router.patch("/update/:id",middleware.verifyToken, updateMeals)
router.delete("/:id",middleware.verifyToken, deleteMeals)


module.exports= router