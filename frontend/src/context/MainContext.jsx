import React, {createContext, useEffect, useRef, useState } from 'react'
import axios from '../api/ApiConfig'


export const userContext= createContext()
const MainContext = ({children}) => {
   const [user, setuser] = useState(null)
    const [meals, setmeals] = useState([])
    const [loading, setLoading] = useState(true)
    const [toggleMenu, settoggleMenu] = useState(false)
     const [toggle, settoggle] = useState(false)
      const [color, setcolor] = useState(`rgb(255,255,255)`)
    const allRef= useRef(null)
  
    // fetching user from backend
    const fetchUser=async()=>{
      try {
        const {data}= await axios.get("/users/", {withCredentials:true})
        setuser(data)
        
      } catch (error) {
        setuser(null)
      } finally {
      setLoading(false);
      }
    }

    useEffect(() => {
      fetchUser()
    }, [])
    



    // fetching meals from backend
    const fetchMeals=async()=>{
      try {
       const {data}= await axios.get("/meals/",{withCredentials:true})
       setmeals(data)
      } catch (error) {
        console.log("Unable to fetch meals");
      }finally{
        setLoading(false)
      }
    }

    useEffect(() => {
      fetchMeals()
    }, [])





    const whiteColor= `rgb(255,255,255)`
    const blackColor= `rgb(0,0,0)`

    const changeColor=()=>{
      if (toggle) {
        setcolor(whiteColor)
        settoggle(false)
        localStorage.setItem("whitecolor",JSON.stringify(whiteColor))
        localStorage.removeItem("blackcolor")

      }else{
        setcolor(blackColor)
        settoggle(true)
        localStorage.setItem("blackcolor",JSON.stringify(blackColor))
        localStorage.removeItem("whitecolor")
    }
    settoggle(!toggle)
    }



  useEffect(() => {
    const white= JSON.parse(localStorage.getItem("whitecolor"))
    const black= JSON.parse(localStorage.getItem("blackcolor"))

     if (white) {
        setcolor(white)
        settoggle(false)

     }else if(black){
        setcolor(black)
        settoggle(true)
     }

  }, [toggle])
    



  return (
    <userContext.Provider value={{meals,setmeals,user,setuser,loading,meals,setmeals,setLoading,settoggleMenu,toggleMenu,setcolor,color,toggle,settoggle,changeColor,allRef}}>
      <div ref={allRef} className='w-screen h-fit' style={{backgroundColor:color,color:color===`rgb(0,0,0)`? "white":"black"}}>
        {children}
      </div>
    </userContext.Provider>
  )
}

export default MainContext