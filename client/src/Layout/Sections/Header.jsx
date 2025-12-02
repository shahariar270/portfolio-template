import { menuArray } from '@Layout/Helper'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export const Header = () => {
    const { pathname } = useLocation();

    const currentPath = menuArray.find(item => item.route === pathname)

    return (
        <div className='st-portfolio--header'>
            <div className="st-portfolio--route-name">
                {currentPath ? currentPath.label : 'Home'}
            </div>

            <div className="st-portfolio--menu">
                {menuArray.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.route} // must include path
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        <p>{item.label}</p>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}
