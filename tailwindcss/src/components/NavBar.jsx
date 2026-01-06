import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
// import { Link,BrowserRouter } from 'react-router-dom'

function NavBar() {
    const [isOpen, setIsOpen] =useState(false)
  // className='hover:bg-white hover:text-slate-800 px-2 py-1 rounded md'
  const NavStyle = "hover:bg-lightgray hover:text-blue-500 rounded-md p-2";
const toggle =() =>{
    setIsOpen(!isOpen);
}
  return (
    <div className="mx-5">
      <nav className="h-28  md:border-b">
        <div className="flex justify-end">
          <ul className="md:flex justify-end items-center py-5 space-x-3 hidden">
            <a href="#" className={NavStyle}>
              Home
            </a>
            <a href="#" className={NavStyle}>
              About
            </a>
            <a href="#" className={NavStyle}>
              Contact
            </a>
          </ul>
          <div className="md:hidden cursor-pointer">
            {isOpen? (<RiCloseLine size={22}  onClick={toggle}/>) :
            (<GiHamburgerMenu size={22}  onClick={toggle}/> )} 
          </div>
        </div>
          {isOpen && (
            <ul className="flex flex-col items-center space-y-3 md:hidden mt-0 justify-end">
            <li><a href="#" className={NavStyle}>Home</a></li>
            <li><a href="#" className={NavStyle}>About</a></li>
            <li><a href="#" className={NavStyle}>Contact</a></li>
          </ul>
            
          )}

      </nav>
    </div>
  );
}

export default NavBar;
