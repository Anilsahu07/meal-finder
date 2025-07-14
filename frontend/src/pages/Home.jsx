import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-screen h-auto  flex flex-col items-center lg:justify-center p-1.5 gap-2">
      <div className="max-w-3xl text-center mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4">
          Welcome to MealMaster 🍽️
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-6">
          Plan, track, and manage your meals for a healthier lifestyle. Create breakfast, lunch, and dinner records with ease.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/meals/create">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-xl text-lg font-semibold hover:bg-orange-600 transition duration-300 shadow-md">
              Get Started
            </button>
          </Link>

          <Link to="/meal/allmeals">
            <button className="px-6 py-3 bg-white text-orange-600 border border-orange-400 rounded-xl text-lg font-semibold hover:bg-orange-100 transition duration-300 shadow-md">
              View Meals
            </button>
          </Link>
        </div>
      </div>

      <img
        src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg"
        alt="Meal illustration"
        className="lg:w-5/6 mt-5 lg:h-[450px] h-2/3 w-full lg:rounded-xl rounded-2xl px-1 shadow-lg object-cover"
      />
    </div>
  );
};

export default Home;
