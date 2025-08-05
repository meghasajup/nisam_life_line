import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export const HomePageLayout = () => {
  return (
    <div >
    <Navbar/>
        <div className='min-h-screen '><Outlet/></div>
      </div>
  )
}
