import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { Home } from './modules/Home/Home'
import { Products } from './components/Products/Products'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SingleProduct } from './components/SingleProduct/SingleProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
  )
}

export default App
