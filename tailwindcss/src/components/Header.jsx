import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
   const style = (isActive) => ({
  backgroundColor: isActive ? 'black' : 'green',
  color: isActive ? 'white' : 'blue'
})
  return (
    <>
      <div className="fixed mx-8 pr-2 top-0 left-0 right-0 z-50 bg-white h-28 sm:h-16 border-b shadow">
        <div className="p-4 flex-row sm:flex justify-between items-center">
          <div className="flex max-sm:my-3 items-center">
            <img className="w-12 p-2" src={logo} alt="logo" />
            <p className="ml-2 text-2xl">learn tailwindcss</p>
          </div>
          <nav  style ={{style}} className=" md:flex gap-3 text-lg items-center max-sm:my-3 hidden">
            <NavLink
              to="/"
              className="hover:bg-gray-300 hover:cursor-pointer rounded"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="hover:bg-gray-300 hover:cursor-pointer rounded"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:bg-gray-300 hover:cursor-pointer rounded active:bg-amber-300"
            >
              Contact
            </NavLink>
          </nav>
          <div className="md:hidden">
            {isOpen ? (
              <RiCloseLine size={30} onClick={toggle} />
            ) : (
              <GiHamburgerMenu size={30} onClick={toggle} />
            )}
          </div>
        </div>

        {isOpen && (
          <nav className="absolute left-0 right-0 top-full md:hidden bg-white shadow border-t transition-all duration-200 ease-out">
            <div className="flex flex-col text-lg">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-3 hover:bg-gray-100 border-b"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-3 hover:bg-gray-100 border-b"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-3 hover:bg-gray-100"
              >
                Contact
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </>
  );
}

export default Header;
