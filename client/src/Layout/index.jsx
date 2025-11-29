import React from 'react'
import { Header } from './Sections/Header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='st-portfolio--layout'>
      <Header />
      <Outlet />
    </div>
  )
}
