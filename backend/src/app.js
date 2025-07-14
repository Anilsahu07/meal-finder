const express= require("express")
const app= express()
const cors= require("cors")
const cookieParser= require("cookie-parser")
const userRouter= require("./routes/userRoutes")
const mealRouter= require("./routes/mealRoutes")
const dotenv= require("dotenv")
dotenv.config()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


app.use("/users", userRouter)
app.use("/meals", mealRouter)


module.exports= app