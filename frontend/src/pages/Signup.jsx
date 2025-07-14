import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import axios from '../api/ApiConfig'
import { userContext } from '../context/MainContext'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Signup = () => {
    const {register,handleSubmit,reset}= useForm()
    const {setuser}=useContext(userContext)
    const navigate=useNavigate()
    
    const signupUserHandler=async(users)=>{
        try {
            const {data}= await axios.post("/users/signup/", users,{withCredentials:true})
            setuser(data)
            navigate("/login")
            toast.success("User created")
        } catch (error) {
            console.log("User not created", error); 
        }  
    }


  return (
   
    <div className="h-screen w-screen flex items-center justify-center bg-black px-4">
      <form 
        onSubmit={handleSubmit(signupUserHandler)}
        className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 space-y-6 text-black"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600">Create Account</h2>

        <input
          {...register('image')}
          type="url"
          placeholder="Profile image URL"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />

        <input
          {...register('username')}
          type="text"
          placeholder="Alex-Mercer"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />

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
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-500">
          Already have an account? <Link to="/login" className="text-indigo-600 underline">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup