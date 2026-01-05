import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Products from './components/Products'
import Footer from './components/Footer'
// import User from './components/User'

function App() {
  return(
    <div className='max-w-7xl m-auto'>
    <Header />
    <Products />
    <Footer />
  </div>
  )
}

export default App
