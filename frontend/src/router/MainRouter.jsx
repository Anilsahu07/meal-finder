import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import MealProduction from '../pages/MealProduction'
import Breakfast from '../pages/breakfast/Breakfast'
import Lunch from '../pages/Lunch/Lunch'
import Dinner from '../pages/Dinner/Dinner'
import Update from '../pages/Update'
import Auth from './Auth'
import UnAuth from './UnAuth'
import Meals from '../pages/Meals'
import Profile from '../pages/Profile'
import Record from '../pages/Record'




const MainRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Auth><Home/></Auth>}/>
        <Route path='/meal/record' element={<Auth><Record/></Auth>}/>
        <Route path='/profile' element={<Auth><Profile/></Auth>}/>
        <Route path='/signup' element={<UnAuth><Signup/></UnAuth>}/>
        <Route path='/login' element={<UnAuth><Login/></UnAuth>}/>
        <Route path='/meals/create' element={<Auth><MealProduction/></Auth>}/>
        <Route path='/meal/breakfast' element={<Auth><Breakfast/></Auth>}/>
        <Route path='/meal/lunch' element={<Auth><Lunch/></Auth>} />
        <Route path='/meal/dinner' element={<Auth><Dinner/></Auth>}/>
        <Route path='/meals/update/:id' element={<Auth><Update/></Auth>}/>
        <Route path='/meal/allmeals' element={<Auth><Meals/></Auth>}/>
    </Routes>
  )
}

export default MainRouter