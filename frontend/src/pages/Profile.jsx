import React, { useContext, useEffect, useRef, useState } from 'react'
import { userContext } from '../context/MainContext'
import {useNavigate} from 'react-router-dom'
import gsap from 'gsap'


const Profile = () => {
  const {toggle,settoggle,changeColor}=useContext(userContext)
   const navigate= useNavigate()
   const currentUser= JSON.parse(localStorage.getItem("loggeduser"))
  console.log(currentUser);
  

  const move= useRef(null)
  useEffect(() => {
    if (toggle) {
    gsap.to(move.current,{
    x:30,
    duration:0.1
  })
  }else{
    gsap.to(move.current,{
    x:0,
    duration:0.1
  })
  }
  }, [toggle])

 
  const moveRight=()=>{
    settoggle(!toggle)
  }


   
  return (
    <div className='w-screen pb-4 h-screen p-3 flex items-center'>
    <div style={{boxShadow:toggle? "3px 2px 5px 2px white":"3px 2px 5px 4px black"}} className="lg:w-1/4 w-full mx-auto p-6 rounded-2xl shadow-lg flex flex-col mt-5 items-center justify-center gap-5 text-center">
      <img
        src={currentUser.user.image || '/default-avatar.png'}
        alt="Profile"
        className="w-36 h-36 mx-auto rounded-full object-cover shadow-md"
      />
      <h2 className="text-4xl font-semibold mt-2 leading-8">{currentUser.user.username}</h2>
      <p className="text-gray-600 text-xl">{currentUser.user.email}</p>
      <p className="text-gray-600 text-sm">{currentUser.user.password.slice(0,20)}</p>

      <div className='w-full flex flex-col items-center gap-3'>
         <h1 className='font-semibold text-xl'>{toggle?"Dark mode":"Light mode"}</h1>
         <div onClick={moveRight} className=" md:w-[80px] w-[80px] lg:w-[80px] h-[42px] bg-white border border-black p-2 flex items-center justify-start relative rounded-3xl">
          {
           toggle? <div onClick={changeColor} ref={move} className='w-8 h-8 bg-black rounded-full absolute'></div>:
           <div onClick={changeColor} ref={move} className='w-8 h-8 bg-black rounded-full'></div>
          } 
         </div>
      </div>
    </div>
    </div>
  )
}

export default Profile