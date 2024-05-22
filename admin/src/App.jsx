import React from 'react'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add/Add.jsx'
import List from './pages/List/List.jsx'
import Orders from './pages/Orders/Orders.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const backend_url = "http://localhost:4000";

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/add' element={<Add backend_url={backend_url}/>}/>
        <Route path='/list' element={<List backend_url={backend_url}/>}/>
        <Route path='/orders' element={<Orders backend_url={backend_url}/>}/>
      </Routes>
    </div>
  )
}

export default App