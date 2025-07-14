import React, { useContext, useState } from 'react'
import {useForm} from 'react-hook-form'
import axios from '../api/ApiConfig'
import { userContext } from '../context/MainContext'
import { toast } from 'react-toastify'

const MealProduction = () => {
  const {register,handleSubmit,reset}=useForm()
  const {setmeals}= useContext(userContext)


  const createMealHandler=async(foodDetail)=>{
    
    try {
      const {data}= await axios.post("/meals/create",foodDetail,{withCredentials:true})
      setmeals(data)
      toast.success("Meal Created !!")
      reset()
      setImageFile(null)
    } catch (error) {
      console.log("Meal not created", error);
    }
  }



  return (
    
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-200 px-4">
      <form
        onSubmit={handleSubmit(createMealHandler)}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold text-center text-emerald-600">Create a New Meal</h2>

        <input
          {...register("image")}
          type="url"
          placeholder="Dish image URL"
          className="w-full px-4 py-2 text-black  rounded-lg border-b-2 border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          required
        />

        <input
          {...register("name")}
          type="text"
          placeholder="Name of dish"
          className="w-full px-4 py-2 text-black rounded-lg border-b-2 border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          required
        />

        <input
          {...register("quantity")}
          type="number"
          placeholder="Quantity"
          className="w-full px-4 py-2 text-black border-b-2 border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          required
        />

        <input
          {...register("date")}
          type="date"
          className="w-full px-4 py-2 text-black  border-b-2 border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          required
        />

        <select
          {...register("type", {required:true})}
          className="w-full px-4 py-2 text-black  border-b-2 border-black rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
          required
        >
          <option>Select type of dish</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>

        <button
          type="submit"
          className="w-full py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition duration-300"
        >
          Create Meal
        </button>
      </form>
    </div>
  )
}

export default MealProduction