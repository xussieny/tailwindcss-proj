import React from 'react'
import logo from '../assets/logo.jpg'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-white border-t text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-10 h-10 rounded" />
            <div>
              <p className="text-lg font-semibold text-slate-800">learn tailwindcss</p>
              <p className="text-sm text-slate-500">online electronics product showcases</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm">© 2026 Hussien Y</p>
            <p className="text-sm text-slate-500">Made with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer