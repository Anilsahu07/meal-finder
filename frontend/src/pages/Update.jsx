import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { userContext } from '../context/MainContext'
import axios from '../api/ApiConfig'
import { useNavigate, useParams } from 'react-router-dom'


const Update = () => {
  const {register,handleSubmit,reset}= useForm()
  const {meals,setmeals}= useContext(userContext);
  
  const navigate= useNavigate()
  const {id}= useParams()
  const selectedMeal= meals.meals.find(m=> m._id ===id)

  
  useEffect(() => {
    if (selectedMeal) {
      reset(selectedMeal)
    }
  }, [])
  



  const updateMealHandler=async(meal)=>{

    const {data}= await axios.patch(`/meals/update/${id}`,meal,{withCredentials:true})
    setmeals(data)
    navigate(`/`)
  }


  return (
       <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-green0 to-emerald-200 px-4">
      <form
        onSubmit={handleSubmit(updateMealHandler)}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6 text-black"
      >
        <h2 className="text-2xl font-bold text-center text-emerald-600">Form to Update Meal</h2>

        <input
         {...register("image")}
          type="url"
          placeholder="Dish image URL"
          className="w-full px-4 py-2  rounded-lg border-b-2 border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
       
        />

        <input
          {...register("name")}
          type="text"
          placeholder="Name of dish"
          className="w-full px-4 py-2 rounded-lg border-b-2 border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
         
        />

        <input
          {...register("quantity")}
          type="number"
          placeholder="Quantity"
          className="w-full px-4 py-2 border-b-2 border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
         
        />

        <input
          {...register("date")}
          type="date"
          className="w-full px-4 py-2  border-b-2 border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
         
        />

        <select
          {...register("type")}
          className="w-full px-4 py-2  border-b-2 border-black rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
        
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
          Update Meal !!
        </button>
      </form>
    </div>
  )
}

export default Update