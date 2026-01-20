import React, { useState } from "react";
import logo from "../../assets/images/logo.jpg";
import { NavLink, useNavigate } from "react-router-dom";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaShoppingCart, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { getCartCount } = useCart();
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  }
   const inactiveClass= "hover:bg-gray-300 hover:cursor-pointer bg-blue-700 px-5.5  py-2.5 text-lg rounded"
   const activeClass= "bg-blue-300  text-white  rounded-lg px-4"
  return (
    <div className="fixed top-0 left-0 right-0 bg-white dark:bg-black shadow-lg border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo and Home */}
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full" src={logo} alt="logo" />
            <span className="ml-3 text-xl font-bold text-gray-800 dark:text-white">E-shopping</span>
          </div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition duration-200"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200"
            }
          >
            Home
          </NavLink>
        </div>

        {/* Right: Auth and Actions */}
        <div className="flex items-center gap-6 md:flex-row sm:grid sm:grid-cols-2 sm:gap-4">
          {/* Auth Group: Login and Logout */}
          <div className="flex gap-2 sm:flex-row sm:col-span-1 sm:justify-center">
            <NavLink
              to="/login"
              className="px-3 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg hover:from-green-500 hover:to-green-700 flex items-center gap-1 font-medium transition duration-300 shadow-md text-sm"
            >
              <FaSignInAlt size={16} /> Login
            </NavLink>
            <button
              onClick={logout}
              disabled={!isLoggedIn}
              className={`px-3 py-2 rounded-lg flex items-center gap-1 font-medium transition duration-300 shadow-md text-sm ${
                isLoggedIn
                  ? 'bg-gradient-to-r from-red-400 to-red-600 text-white hover:from-red-500 hover:to-red-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <FaSignOutAlt size={16} /> Logout
            </button>
          </div>

          {/* Actions Group: Cart and Theme */}
          <div className="flex gap-2 sm:flex-row sm:col-span-1 sm:justify-center items-center">
            <div className="relative">
              <FaShoppingCart
                size={20}
                className="cursor-pointer text-gray-700 dark:text-white hover:text-blue-500 transition duration-300"
                onClick={() => navigate('/cart')}
              />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold animate-pulse">
                  {getCartCount()}
                </span>
              )}
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 shadow-md"
            >
              {isDark ? <MdLightMode size={20} className="text-yellow-400" /> : <MdDarkMode size={20} className="text-gray-700 dark:text-white" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
