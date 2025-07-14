import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import axios from '../api/ApiConfig'
import { userContext } from '../context/MainContext'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Login = () => {
    const {register,handleSubmit,reset}= useForm()
    const {setuser}=useContext(userContext)
    const navigate= useNavigate()


    const loginUserHandler=async(user)=>{
        try {
            const {data}= await axios.post("/users/login",user,{withCredentials:true})
            localStorage.setItem("loggeduser", JSON.stringify(data))
            setuser(data)
            navigate("/")
           toast.success("Login successful !!")
            
        } catch (error) {
            console.log("Login failed", error);
            toast.success("Login failed")
            
        }
       
    }

  return (
    <div className=" w-screen h-screen flex items-center justify-center bg-black px-4">
      <form 
        onSubmit={handleSubmit(loginUserHandler)}
        className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 space-y-6 text-black"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600">Welcome Back</h2>

        <input
          {...register('email')}
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />

        <input
          {...register('password')}
          type="password"
          placeholder="Enter password"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />

        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
        >
          Log In
        </button>

        <p className="text-center text-sm text-gray-500">
          Don’t have an account? <Link to="/signup" className="text-indigo-600 underline">Sign up</Link>
        </p>
      </form>
    </div>
  )
}

export default Login