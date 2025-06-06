import React from 'react'
import { Footer } from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import { HomeHeader } from '../Components/HomrHeader'

export const HomePageLayout = () => {
  return (
    <div >
    <HomeHeader/>
        <div className='min-h-screen '><Outlet/></div>
      <Footer/>
      </div>
  )
}
