import React from 'react'
import { LeftContentBox } from './Sections/LeftContentBox'
import { Outlet } from 'react-router-dom'
import { RightContentBox } from './Sections/RightContentBox'

export const Layout = () => {
  return (
    <div className='st-portfolio--layout'>
      <LeftContentBox />
      <RightContentBox />
    </div>
  )
}
