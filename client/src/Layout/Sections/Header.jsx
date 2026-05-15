import { menuArray } from '@Layout/Helper'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export const Header = () => {
    const { pathname } = useLocation();

    const currentPath = menuArray.find(item => item.route === pathname)

    return (
        <div className='st-portfolio--header'>
            <div className="st-portfolio--route-name">
                <h3>{currentPath ? currentPath.label : 'Home'}</h3>
            </div>

            {/* <div className="st-portfolio--news-slider" aria-label="Latest news">
                <div className="st-portfolio--news-track">
                    <span>justices for hadi,</span>
                    <span>Free Palestine 🇵🇸  </span>
                    <span>আমি আমার শত্রুর সাথেও ইনসাফ করতে চাই</span>
                </div>
            </div> */}

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
