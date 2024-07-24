import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import { Routes, Route, useNavigate } from 'react-router-dom'
import OrderPage from './pages/Orders/OrderPage'
import ProductsPage from './pages/Products/ProductsPage'
import AddOrder from './pages/Orders/AddOrder'
import EditOrder from './pages/Orders/EditOrder.jsx'
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
        <Route path="/add-order" element={<AddOrder />} />
        <Route path="/add-order/:id" element={<EditOrder />} />
        <Route path="/products-list" element={<ProductsPage />} />
      </Routes>
    </div>
  )
}

export default App
