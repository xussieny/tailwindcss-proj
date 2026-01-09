import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Products from './components/Products'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import UseFetch from './components/UseFetch'

function App() {
  return (
    
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/UseFetch' element={<UseFetch />} />

        </Routes>

        <Footer />
      </BrowserRouter>

  )
}

export default App
