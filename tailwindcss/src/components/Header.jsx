import React from 'react'
import logo from '../assets/logo.jpg'
import { NavLink } from 'react-router-dom'

function Header() {
        return (
                <>
                <div className='fixed mx-8 pr-2 top-0 left-0 right-0 z-50 bg-white h-28 sm:h-16 border-b shadow'>
                                <div className='p-4 flex-row sm:flex justify-between items-center'>
                        <div className='flex max-sm:my-3 items-center'>
                                <img className='w-12' src={logo} alt="logo"  p-2/>
                        <p className='ml-2 text-2xl'>learn tailwindcss</p>

                        </div>
                        <nav className=' flex gap-3 text-lg items-center max-sm:my-3'>
                             <NavLink to = '/' className='hover:bg-gray-300 hover:cursor-pointer rounded'>Home</NavLink>
                                <NavLink to='/about' className='hover:bg-gray-300 hover:cursor-pointer rounded'>About</NavLink>
                                <NavLink to= '/contact' className='hover:bg-gray-300 hover:cursor-pointer rounded'>Contact</NavLink>
                                </nav>
                </div>
                </div>
                </>
    )
}

export default Header