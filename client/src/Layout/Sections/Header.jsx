import Button from '@Component/Button'
import { menuArray } from '@Layout/Helper'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import profile from '../../assets/images/profile.jpg'

export const Header = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const themeName = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", themeName);
    localStorage.setItem("theme", themeName);
  }, [isDark]);

  const handleTheme = () => setIsDark((prev) => !prev);


  return (
    <div className='st-portfolio--header'>
      <div className="st-portfolio--logo">
           <img src={profile} alt="" />
      </div>
      <div className="st-portfolio--menu">
        {menuArray.map((item, index) => (
          <Link key={index} >
            <p>
              {item.label}
            </p>
          </Link>
        ))
        }
      </div>
      <div className="st-portfolio--theme">
        <Button
          label={'theme change'}
          variants='transparent'
          onClick={handleTheme}
        />
      </div>
    </div>
  )
}
