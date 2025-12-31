import Button from '@Component/Button'
import { menuArray } from '@Layout/Helper'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import profile from '../../assets/images/profile.jpg'

export const LeftContentBox = () => {
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
    <div className='st-portfolio--left-content'>
      <div className="st-portfolio--logo">
        <img src={profile} alt="" />
        <div className="st-portfolio--content">
          <h1>Shahariar</h1>
          <p>React Developer | MERN Stack Enthusiast</p>
        </div>
      </div>
      {/* 
      <div className="st-portfolio--theme">
        <Button
          label={'theme change'}
          variants='transparent'
          onClick={handleTheme}
        />
      </div> */}
    </div>
  )
}
