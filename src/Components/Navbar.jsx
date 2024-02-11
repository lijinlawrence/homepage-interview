import React, { useState } from 'react';

import logo from "../assets/real-estate-house.png";
const Navbar = () => {

  const [open, setOpen]=useState(false)

  const handleOpen=()=>{
    setOpen(!open)
    console.log(open);
  }

   
  return (

   
    <div>
      <nav className=" flex items-center justify-evenly w-full h-16 bg-gray-200 mx-auto   sticky z-10 top-0">
        <div>
          <img src={logo} alt="logo" className=" w-28" />
        </div>
        <div>
          <p className=" font-robo text-xl font-bold ">XYZ SYSTEMS LLP.</p>
        </div>
        <div></div>
      </nav>

      
      <div className=" md:flex md:items-center md:justify-around md:py-5 w-full   ">

        <div>
        <button onClick={ handleOpen} className=" md:hidden block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        </div>
        <div className={` md:block ${open? 'block':'hidden'}`}>
          <ul className={` flex items-center flex-col md:flex-row space-y-5 md:space-y-0 my-10 md:my-0`}>
        
            <li className=" md:mx-8 font-robo hover:text-blue-300">
              <a href="">Home</a>
            </li>
            <li className=" md:mx-8 font-robo hover:text-blue-300">
              <a href="">Dash board</a>
            </li>
            <li className=" md:mx-8 font-robo hover:text-blue-300">
              <a href="">Products</a>
            </li>
            <li className=" md:mx-8 font-robo hover:text-blue-300">
              <a href="">Transactions</a>
            </li>
            <li className=" md:mx-8 font-robo hover:text-blue-300">
              <a href="">Journal</a>
            </li>
          </ul>
        </div>
        <div className=" md:flex justify-center items-center flex-col md:block hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-blue-00 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <p>Joseup Lazer</p>
        </div>
        
      </div>

     
        
      </div>
    
  );
};

export default Navbar;
