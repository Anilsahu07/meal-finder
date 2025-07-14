import React from 'react'
import { Link } from 'react-router-dom'

const Meals = () => {
  return (
<div className="w-screen min-h-screen flex flex-col items-center text-center px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-10 leading-tight">
        Choose your meal type
        <p className="text-2xl md:text-3xl font-medium mt-2 text-gray-600">to get it done!!</p>
      </h1>

      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {/* Breakfast */}
        <Link
          to="/meal/breakfast"
          className="rounded-2xl overflow-hidden relative group h-64 shadow-xl"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/32903152/pexels-photo-32903152.jpeg')",
            }}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300 flex items-center justify-center">
            <h2 className="text-white text-2xl font-semibold">Breakfast Meals</h2>
          </div>
        </Link>

        {/* Lunch */}
        <Link
          to="/meal/lunch"
          className="rounded-2xl overflow-hidden relative group h-64 shadow-xl"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg')",
            }}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300 flex items-center justify-center">
            <h2 className="text-white text-2xl font-semibold">Lunch Meals</h2>
          </div>
        </Link>

        {/* Dinner */}
        <Link
          to="/meal/dinner"
          className="rounded-2xl overflow-hidden relative group h-64 shadow-xl"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg')",
            }}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300 flex items-center justify-center">
            <h2 className="text-white text-2xl font-semibold">Dinner Meals</h2>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Meals