import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Page/Home/Nav/Nav'
import Footer from '../Page/Home/Footer/Footer'

function Layout() {
  return (
    <div className='w-full flex justify-center items-center flex-col '>
      <div className='w-full max-w-screen-xl'>
        <Nav />
        <Outlet />
        <Footer />
        </div>    
    </div>
  )
}

export default Layout