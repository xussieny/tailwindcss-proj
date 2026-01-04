import React from 'react'
import logo from '../assets/logo.jpg'

function Header() {
  return (
    <div className='h-28 sm:h-16 border-b-8' >
        <div className='flex-row sm:flex justify-between item-center'>
            <div className='flex max-sm:my-2 items-center'>
                <img className='w-12' src={logo} alt="logo" />
            <p className='ml-2 text-2xl'>learn tailwindcss</p>

            </div>
            <nav className=' flex gap-3 text-lg items-center'>
                <span className='hover:bg-gray-300 hover:cursor-pointer rounded'>Home</span>
                <span className='hover:bg-gray-300 hover:cursor-pointer rounded'>Products</span>
                <span className='hover:bg-gray-300 hover:cursor-pointer rounded'>Contact Us</span>
                </nav>
        </div>
    </div>
  )
}

export default Header