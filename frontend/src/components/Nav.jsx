import React, { useContext, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { userContext } from '../context/MainContext'
import gsap from 'gsap'
import axios from '../api/ApiConfig'
import { toast } from 'react-toastify'


const Nav = () => {
  const navigate=useNavigate()
 const {setuser,toggleMenu,settoggleMenu}= useContext(userContext)
  const logged= JSON.parse(localStorage.getItem("loggeduser"))
  
  const logoutUser=async()=>{
    try {
      await axios.get("/users/logout", {withCredentials:true})
      setuser(null)
      localStorage.removeItem("loggeduser")
      navigate("/login")
      console.log("Logout successful");
      toast.success("User logout") 
    } catch (error) {
      console.log("Logout Failed !!");
    }
  }


  const toggleMenuIcon=()=>{
    settoggleMenu(!toggleMenu)
  }


  const menuRef = useRef(null)
  const iconRef= useRef(null)

   gsap.to(menuRef.current,{
        y:80,
        x:-5,
        x:0.5,
        duration:2,
   })

  
  useEffect(() => {
   const handleClickOutside = (event) => {
     if (
       menuRef.current &&
       !menuRef.current.contains(event.target) &&
       iconRef.current &&
       !iconRef.current.contains(event.target) 
     ) {
       settoggleMenu(false);
     }
   };
 
   document.addEventListener("mousedown", handleClickOutside);
   return () => {
     document.removeEventListener("mousedown", handleClickOutside);
   };
   }, []);
   


  return (
    <div className='w-screen text-gray-50 flex justify-center items-center pt-1 relative p-0.5'>
      {logged ? <div className='w-full flex bg-gray-800 justify-between items-center gap-6 p-5 rounded-2xl font-[montserrat]'> 
        <div>
          <h1 className='font-bold lg:text-3xl text-2xl flex items-center gap-1'><p className='text-blue-300'>Meal</p>Finder</h1>
        </div>
        <div className='w-full flex justify-center items-center gap-6'>
            <NavLink className={`hover:scale-110 transition-all duration-150 lg:flex hidden`} to={`/`}>Home</NavLink>
            {/* <NavLink className={`hover:scale-110 transition-all duration-150`} to={`/meals/create`}>Produce</NavLink> */}
            {/* <NavLink className={`hover:scale-110 transition-all duration-150`} to={`/meal/breakfast`}>Breakfast</NavLink>
            <NavLink className={`hover:scale-110 transition-all duration-150`} to={`/meal/lunch`}>Lunch</NavLink> */}
            <NavLink className={`hover:scale-110 transition-all duration-150 lg:flex hidden`} to={`/meal/allmeals`}>Meals</NavLink>
            <NavLink className={`hover:scale-110 transition-all duration-150 lg:flex hidden`} to={`/meal/record`}>Record</NavLink>
            <NavLink className={`hover:scale-110 transition-all duration-150 lg:flex hidden`} to={`/profile`}>Profile</NavLink>
        </div>
        <div>
          <button className='bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded lg:flex hidden' onClick={logoutUser}>Logout</button>
        </div>

        <div ref={iconRef}>
          <button className='' onClick={toggleMenuIcon}>
            {toggleMenu? <i className="ri-menu-5-line text-2xl"></i>: <i className="ri-menu-line text-2xl"></i>}
          </button>
          <div ref={menuRef} className='flex justify-end absolute z-50 right-0 top-0 w-screen'>
             {
              toggleMenu && 
              <div className=' flex flex-col items-center justify-center gap-9 w-screen h-screen bg-gray-700 lg:w-screen rounded-xl' > 
                  <NavLink onClick={()=>settoggleMenu(false)} className={`hover:scale-110 transition-all duration-150 text-2xl`} to={`/`}>Home</NavLink>
                  <NavLink onClick={()=>settoggleMenu(false)} className={`hover:scale-110 transition-all duration-150 text-2xl`} to={`/profile`}>Profile</NavLink>
                  <NavLink onClick={()=>settoggleMenu(false)} className={`hover:scale-110 transition-all duration-150 text-2xl`} to={`/meal/allmeals`}>Meals</NavLink>
                  <NavLink onClick={()=>settoggleMenu(false)} className={`hover:scale-110 transition-all duration-150 text-2xl`} to={`/meal/breakfast`}>Breakfast</NavLink>
                  <NavLink onClick={()=>settoggleMenu(false)} className={`hover:scale-110 transition-all duration-150 text-2xl`} to={`/meal/lunch`}>Lunch</NavLink>
                  <NavLink onClick={()=>settoggleMenu(false)} className={`hover:scale-110 transition-all duration-150 text-2xl`} to={`/meal/dinner`}>Dinner</NavLink>
                  <NavLink onClick={()=>settoggleMenu(false)} className={`hover:scale-110 transition-all duration-150 text-2xl`} to={`/meal/record`}>Record</NavLink>
                  <button className='bg-blue-500 hover:bg-red-600 text-white px-3 py-2 rounded text-xl' onClick={()=>{logoutUser();settoggleMenu(false)}}>Logout</button>
              </div>
              }
          </div>
         
        </div>
      </div> :
        <div className='w-full flex bg-gray-500 justify-evenly items-center p-5 rounded-2xl font-[montserrat] '>
            <NavLink to={`/signup`}>Signup</NavLink>
            <NavLink to={`/login`}>Login</NavLink>
       </div>
        }
    </div>
  )
}

export default Nav