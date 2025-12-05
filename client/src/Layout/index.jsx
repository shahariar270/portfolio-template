import React, { useEffect } from 'react'
import { LeftContentBox } from './Sections/LeftContentBox'
import { RightContentBox } from './Sections/RightContentBox'

export const Layout = () => {

  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const handleMove = (e) => {
      if (!cursor) return;
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    document.addEventListener("mousemove", handleMove);

    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div className='st-portfolio--layout'>
      <div className="cursor"></div>

      <LeftContentBox />
      <RightContentBox />
    </div>
  )
}
