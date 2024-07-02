import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { Home } from './modules/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SingleProduct } from './components/SingleProduct/SingleProduct'
import { Products } from './components/Products/Products.jsx'
import { CategoriesProducts } from './components/CategoriesProducts/CategoriesProducts.jsx'
import { Cart } from './modules/Home/Cart/Cart.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:id" element={<SingleProduct />} />
        <Route exact path="/products/:name" element={<CategoriesProducts />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
