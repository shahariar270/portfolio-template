import { menuArray } from '@Layout/Helper'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <div className='st-portfolio--header'>
            <div className="st-portfolio--route-name"></div>

            <div className="st-portfolio--menu">
                {menuArray.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path} // must include path
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        <p>{item.label}</p>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}
