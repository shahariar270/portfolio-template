import React from 'react'
import { LeftContentBox } from './Sections/LeftContentBox'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='st-portfolio--layout'>
      <LeftContentBox />
      <Outlet />
    </div>
  )
}
