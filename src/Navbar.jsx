import { useState } from 'react';
import logo from './assets/mylogo.png';
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="container mx-auto w-full px-4 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img className="w-[150px] md:w-[202px] h-[80px] md:h-[100px]" src={logo} alt="My Company Logo" />
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FaTimes className="text-[#E5745D]" /> : <FaBars className="text-[#E5745D]" />}
      </div>

      {/* Navigation Links */}
      <ul className={`fixed top-0 left-0 w-full h-full bg-white z-20 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:static md:flex md:flex-grow md:items-center md:justify-center md:space-x-6 md:bg-transparent md:w-auto md:h-auto md:transform-none`}>
        <li className="text-center md:inline-block p-6 md:p-0">
          <HashLink className="text-[#E5745D] text-lg" to="#home" onClick={toggleMenu}>Home</HashLink>
        </li>
        <li className="text-center md:inline-block p-6 md:p-0">
          <HashLink className="text-[#00413D] text-lg" to="#project" onClick={toggleMenu}>Pages</HashLink>
        </li>
        <li className="text-center md:inline-block p-6 md:p-0">
          <HashLink className="text-[#00413D] text-lg" to="#service" onClick={toggleMenu}>Services</HashLink>
        </li>
        <li className="text-center md:inline-block p-6 md:p-0">
          <HashLink className="text-[#00413D] text-lg" to="#blog" onClick={toggleMenu}>Blog</HashLink>
        </li>
        <li className="text-center md:inline-block p-6 md:p-0">
          <HashLink className="text-[#00413D] text-lg" to="#contact" onClick={toggleMenu}>Contact</HashLink>
        </li>
      </ul>

      {/* Download Button */}
      <div className="hidden md:block">
        <button className="bg-[#E5745D] text-white py-3 px-6 rounded border border-white outline outline-[#E5745D] hover:bg-[#D55A4B] transition">
          Download CV
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
