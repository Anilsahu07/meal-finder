import React, { useContext } from 'react'
import { userContext } from '../context/MainContext'
import { Navigate } from 'react-router-dom';

const Auth = ({children}) => {
    const {loading}= useContext(userContext)
    const apps= JSON.parse(localStorage.getItem("loggeduser"))
    console.log(apps);
    
    
   if (loading) return <p>Loading...</p>
    
   
   return apps? children: <Navigate to={`/login`} replace/>
}

export default Auth