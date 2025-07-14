import React, { useContext } from 'react'
import { userContext } from '../../context/MainContext';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/ApiConfig'

const Lunch = () => {
 const { meals,setmeals} = useContext(userContext);
 const navigate= useNavigate()
  console.log(meals);
  
  // If loading OR meals not ready

    if (!Array.isArray(meals.meals)) {
    return (<div className="flex w-screen items-center justify-center h-[80vh]">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
           </div>)
  }

  // Filter only breakfast meals
  const lunchMeals = meals.meals.filter((m) => m.type === 'lunch');
  
  
  
  const deleteMeal=async(id)=>{
   const deletedMeal= await axios.delete(`/meals/${id}`,{withCredentials:true})
    setmeals(deletedMeal)
    toast.success("Meal deleted !!")
  }



  const editMeal=(id)=>{
    navigate(`/meals/update/${id}`)
  }


  return (
  <div className="w-screen h-fit flex flex-col items-center justify-center mt-6 px-1 pb-2">

    <h1 className="text-4xl sm:text-5xl mb-4 font-bold font-[Poppins] text-blue-700 text-center">
    Your Lunch Planner 🍳
    </h1>

  {/* ✅ Introduction Paragraph */}
  <p className="max-w-2xl text-center text-gray-500 mb-6 px-4 text-lg sm:text-lg">
    Kickstart your day with a healthy and fulfilling breakfast! Track your meals, edit them easily, and get smart AI-based suggestions to make your mornings better.
  </p>

  {/* ✅ Hero Image */}
  <img
    src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    alt="Healthy Lunch"
    className="w-full max-w-6xl rounded-xl shadow-lg mb-8 object-cover h-[200px] sm:h-[300px] p-2"
  />

    {lunchMeals.length === 0 ? (
      <p className='text-center'>No Meal is created yet for Lunch..try creating one!!</p>
      ) : (
      <div className="w-full flex flex-wrap justify-center gap-4 p-4">
      {lunchMeals.map((m) => (
        <div
          key={m._id}
          className="w-full sm:w-full md:w-full lg:w-fit text-white flex flex-col sm:flex-row items-center justify-between p-5 rounded-xl outline outline-gray-600 shadow-xl hover:shadow-2xl transition-shadow duration-300 font-serif"
        >
          {/* Meal Image */}
          <img
            className="w-full sm:w-1/2 lg:h-[350px]  rounded-xl object-cover mb-4 sm:mb-0"
             src={`${m.image}`}
            alt="Meal"
          />

          {/* Meal Information */}
          <div className="w-full sm:w-2/3 flex flex-col justify-between sm:px-4 ">
            {/* Date */}
            <p className="bg-green-300 p-4 rounded-xl mb-4 text-center hover:bg-green-500 border border-black">
              <h1 className="underline font-semibold text-black text-sm">Date:</h1>
              {m.date}
            </p>

            {/* Dish Name */}
            <h2 className="text-center bg-green-300 p-4 rounded-xl mb-4 text-2xl sm:text-3xl hover:bg-green-500 border border-black">
              <p className="underline font-semibold text-black text-sm">Dish Name:</p>
              {m.name}
            </h2>

            {/* Meal Quantity and Type */}
            <div className="flex flex-col gap-4">
              <p className="bg-green-500 p-4 rounded-xl text-center hover:bg-green-400 border border-black">
                <h1 className="underline font-semibold text-black text-sm">Quantity</h1>
                {m.quantity}
              </p>
              <h1 className="bg-green-500 p-4 rounded-xl text-center hover:bg-green-400 text-xl border border-black">
                <p className="underline font-semibold text-black text-sm">Type:</p>
                {m.type}
              </h1>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full sm:w-1/4 flex flex-col justify-center items-center gap-4 mt-4 sm:mt-0">
            <button
              onClick={() => editMeal(m._id)}
              className="bg-white text-gray-700 lg:w-full p-3 rounded-xl border-2 border-blue-700 transition-transform transform hover:scale-105 w-1/2"
            >
              Edit Meal
            </button>
            <button
              onClick={() => deleteMeal(m._id)}
              className="bg-white lg:min-w-full w-1/2 text-gray-700 p-3 rounded-xl border-2 border-blue-700 transition-transform transform hover:scale-105"
            >
              Delete it!!
            </button>
          </div>
        </div>
      ))}
    </div>
    )}
  </div>
  );
};



export default Lunch