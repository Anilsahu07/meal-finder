import React, { useContext } from 'react'
import { userContext } from '../context/MainContext'

const Record = () => {
    const {meals}= useContext(userContext)

    if (Array.isArray(meals)) {
        return (<div className="flex w-screen items-center justify-center h-[80vh]">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
           </div>)
    }

    const breakfast= meals.meals.filter(m=>m.type==="breakfast")
    const lunch= meals.meals.filter(m=>m.type==="lunch")
    const dinner= meals.meals.filter(m=>m.type==="dinner")

    
  return (
    <div className="w-full min-h-screen px-4 py-8">
  <h1 className="text-4xl font-bold text-center text-emerald-700 mb-10">
    Total Record of Meals 🍽️
  </h1>

  <div className="flex flex-col md:flex-row md:justify-around gap-6">
  
    <div className="bg-white shadow-lg rounded-xl p-6 w-full md:w-1/3 border-t-4 border-yellow-400">
      <h3 className="text-2xl font-semibold text-yellow-600 mb-2 text-center">Breakfast</h3>
      {breakfast.length === 0 ? (
        <p className="text-gray-500 italic text-center">No meal is added</p>
      ) : (
        <>
          <h1 className="text-center text-lg font-medium text-gray-700 mb-2">
            Meals added in Breakfast: <span className="font-bold text-yellow-700">{breakfast.length}</span>
          </h1>
          <div className="space-y-1">
            {breakfast.map((m, i) => (
              <li
                key={i}
                className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md text-center shadow-sm"
              >
                {m.name}
              </li>
            ))}
          </div>
        </>
      )}
    </div>

  
    <div className="bg-white shadow-lg rounded-xl p-6 w-full md:w-1/3 border-t-4 border-green-400">
      <h3 className="text-2xl font-semibold text-green-600 mb-2 text-center">Lunch</h3>
      {lunch.length === 0 ? (
        <p className="text-gray-500 italic text-center">No meal is added</p>
      ) : (
        <>
          <h1 className="text-center text-lg font-medium text-gray-700 mb-2">
            Meals added in Lunch: <span className="font-bold text-green-700">{lunch.length}</span>
          </h1>
          <div className="space-y-1">
            {lunch.map((m, i) => (
              <li
                key={i}
                className="bg-green-200 text-green-900 px-3 py-1 rounded-md text-center shadow-sm"
              >
                {m.name} ({m.date})
              </li>
            ))}
          </div>
        </>
      )}
    </div>

  
    <div className="bg-white shadow-lg rounded-xl p-6 w-full md:w-1/3 border-t-4 border-indigo-400">
      <h3 className="text-2xl font-semibold text-indigo-600 mb-2 text-center">Dinner</h3>
      {dinner.length === 0 ? (
        <p className="text-gray-500 italic text-center">No meal is added</p>
      ) : (
        <>
          <h1 className="text-center text-lg font-medium text-gray-700 mb-2">
            Meals added in Dinner: <span className="font-bold text-indigo-700">{dinner.length}</span>
          </h1>
          <div className="space-y-1">
            {dinner.map((m, i) => (
              <li
                key={i}
                className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-md text-center shadow-sm"
              >
                {m.name}
              </li>
            ))}
          </div>
        </>
      )}
    </div>
  </div>
</div>

  )
}

export default Record