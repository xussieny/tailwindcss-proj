import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Header from './components/Header'
import Header from './components/layout/Header'
import Products from './components/products/Products'
import Footer from './components/layout/Footer'
import ProductDetail from './components/products/ProductDetail'
import Cart from './components/cart/Cart'
import Login from './components/Pages/Login'
import { CartProvider } from './contexts/CartContext'
import { AuthProvider } from './contexts/AuthContext'
// import Login from './components/Pages/Login'
// import Logout from './components/Pages/Logout'

function App() {
  return (
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="grow">
                <Routes>
                  <Route path='/' element={<Products />} />
                  <Route path='/product' element={<ProductDetail />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/login' element={<Login />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>

  )
}

export default App
