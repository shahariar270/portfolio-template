import logo from './assets/mylogo.png'
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaFacebook, FaGithub, FaInstagram, FaSkype, FaWhatsapp } from 'react-icons/fa';
import { FaThreads, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="bg-info h-auto py-6 mt-6 font-ff">
      {/* Logo Section */}
      <img className='w-[150px] h-auto mx-auto sm:w-[180px] sm:h-[100px]' src={logo} alt="Logo" />

      {/* Navigation Links */}
      <div className="flex justify-center items-center py-6">
        <ul className='flex flex-wrap justify-center'>
          <li className='text-[#fff] text-sm sm:text-xl'>
            <HashLink className='px-2 sm:px-3 font-medium' to='#home'>Home</HashLink>|
          </li>
          <li className='text-[#fff] text-sm sm:text-xl'>
            <HashLink className='px-2 sm:px-3 font-medium' to='#about'>About</HashLink>|
          </li>
          <li className='text-[#fff] text-sm sm:text-xl'>
            <HashLink className='px-2 sm:px-3 font-medium' to='#service'>Services</HashLink>|
          </li>
          <li className='text-[#fff] text-sm sm:text-xl'>
            <HashLink className='px-2 sm:px-3 font-medium' to='#portfolio'>Portfolio</HashLink>|
          </li>
          <li className='text-[#fff] text-sm sm:text-xl'>
            <HashLink className='px-2 sm:px-3 font-medium' to='#blog'>Blog</HashLink>|
          </li>
          <li className='text-[#fff] text-sm sm:text-xl'>
            <HashLink className='px-2 sm:px-3 font-medium' to='#contact'>Contact</HashLink>
          </li>
        </ul>
      </div>

      {/* Social Icons Section */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-6">
        {/* Each social icon */}
        <a href="https://www.linkedin.com/in/mdshahariar270/" className="bg-hots h-12 w-12 sm:h-16 sm:w-16 rounded-full flex items-center justify-center">
          <SlSocialLinkedin className='h-6 w-6 sm:h-[60px] sm:w-9' />
        </a>
        <a href="https://github.com/shahariar270" className="bg-hots h-12 w-12 sm:h-16 sm:w-16 rounded-full flex items-center justify-center">
          <FaGithub className='h-6 w-6 sm:h-[60px] sm:w-9' />
        </a>
        <a href="https://www.linkedin.com/in/mdshahariar270/" className="bg-hots h-12 w-12 sm:h-16 sm:w-16 rounded-full flex items-center justify-center">
          <FaFacebook className='h-6 w-6 sm:h-[60px] sm:w-9' />
        </a>
        <a href="https://wa.me/+8801915579467" className="bg-hots h-12 w-12 sm:h-16 sm:w-16 rounded-full flex items-center justify-center">
          <FaWhatsapp className='h-6 w-6 sm:h-[60px] sm:w-9' />
        </a>
        <a href="https://www.instagram.com/mdshahariar2700/" className="bg-hots h-12 w-12 sm:h-16 sm:w-16 rounded-full flex items-center justify-center">
          <FaInstagram className='h-6 w-6 sm:h-[60px] sm:w-9' />
        </a>
        <a href="https://x.com/mdshahariar270" className="bg-hots h-12 w-12 sm:h-16 sm:w-16 rounded-full flex items-center justify-center">
          <FaXTwitter className='h-6 w-6 sm:h-[60px] sm:w-9' />
        </a>
        <a href="https://www.threads.net/@mdshahariar2700" className="bg-hots h-12 w-12 sm:h-16 sm:w-16 rounded-full flex items-center justify-center">
          <FaThreads className='h-6 w-6 sm:h-[60px] sm:w-9' />
        </a>
        <a href="https://join.skype.com/invite/rUgUBTGTbZbf" className="bg-hots h-12 w-12 sm:h-16 sm:w-16 rounded-full flex items-center justify-center">
          <FaSkype className='h-6 w-6 sm:h-[60px] sm:w-9' />
        </a>
      </div>

      {/* Divider */}
      <hr className='h-px my-6 bg-ten border-0 dark:bg-ten mx-auto w-11/12 sm:w-3/4' />

      {/* Copyright Section */}
      <div className="text-center">
        <span className='md:text-xl text-[12px] text-[#fff]'>Copyright © 2023 Design By Shahariar. All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer;
