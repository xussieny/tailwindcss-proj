import React from 'react'
import logo from '../../assets/images/logo.jpg'
import { NavLink } from 'react-router-dom'
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-background border-border border-t text-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-10 h-10 rounded" />
            <div>
              <p className="text-sm">E-shopping</p>
              <p className="text-sm text-muted-foreground">online electronics product showcases</p>
            </div>
          </div>

          <div className="text-center md:text-center">
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="flex justify-center gap-6">
              <NavLink to="https://github.com/xussieny" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <FaLinkedin size={24} />
              </NavLink>
              <NavLink to="https://www.linkedin.com/in/hussien-yegoraw" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gray-800 transition-colors">
                <FaGithub size={24} />
              </NavLink>
               <NavLink to="mailto:xussieny@gmail.com" className="text-muted-foreground hover:text-red-600 transition-colors">
                <FaEnvelope size={24} />
              </NavLink>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm">© 2026 Hussien Y</p>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer