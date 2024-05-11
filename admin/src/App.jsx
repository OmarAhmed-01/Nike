import React from 'react'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add/Add.jsx'
import List from './pages/List/List.jsx'
import Orders from './pages/Orders/Orders.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/add' element={<Add/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
    </div>
  )
}

export default App