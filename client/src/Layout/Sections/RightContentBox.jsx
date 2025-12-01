import React from 'react'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'

export const RightContentBox = () => {
    return (
        <div
            className='st-portfolio--right-content'
        >
            <Header />
            <Outlet/>
        </div>
    )
}
