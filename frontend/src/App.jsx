import React from 'react'
import Nav from './components/Nav'
import MainRouter from './router/MainRouter'
import {ToastContainer} from 'react-toastify'


const App = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <Nav/>
      <div class="w-screen">
        <MainRouter/>
      </div>
      <ToastContainer theme='colored' position='top-center' autoClose={1000}/>
    </div>
  )
}

export default App