import React, { useEffect, useState } from 'react'
import profile from '../../assets/images/profile.jpg'

export const LeftContentBox = () => {
  const [isDark] = useState(() => {
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

  return (
    <div className='st-portfolio--left-content'>
      <div className="st-portfolio--logo">
        <img src={profile} alt="" />
        <div className="st-portfolio--content">
          <h1>Shahariar</h1>
          <p>React Developer | MERN Stack Enthusiast</p>
        </div>
      </div>

      <div className="st-portfolio--profile-panel">
        <p className="st-portfolio--eyebrow">Available for work</p>
        <h2>Building clean web apps with React and MERN.</h2>
        <p>
          I focus on responsive interfaces, reusable components, API integration,
          and practical user experiences.
        </p>
      </div>

      <div className="st-portfolio--quick-info">
        <div>
          <span>Focus</span>
          <strong>Frontend + MERN</strong>
        </div>
        <div>
          <span>Location</span>
          <strong>Bangladesh</strong>
        </div>
        <div>
          <span>Response</span>
          <strong>Within 24 hours</strong>
        </div>
      </div>

      <div className="st-portfolio--sidebar-stats">
        <div>
          <strong>10+</strong>
          <span>Skills</span>
        </div>
        <div>
          <strong>4</strong>
          <span>Projects</span>
        </div>
      </div>
    </div>
  )
}
