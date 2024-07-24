import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route, useNavigate } from 'react-router-dom'
import OrderPage from './pages/OrderPage'
import ProductsPage from './pages/Products/ProductsPage'

function App() {

  const navigate = useNavigate()

  useEffect(() => {
    navigate('/my-orders')
  }, [])

  return (
    <div className='bg-white h-screen'>
      <NavBar />
      <Routes>
        <Route path="/my-orders" element={<OrderPage />} />
        <Route path="/products-list" element={<ProductsPage />} />
      </Routes>
    </div>
  )
}

export default App
