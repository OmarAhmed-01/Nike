import React, { useState } from 'react';
import Navbar from './components/Nav/Navbar';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Golf from './pages/Golf/Golf';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';

function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin}/>: <></>}
      <div className=' app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/w/golf-and-lifestyle' element={<Golf/>}/>
          <Route path='/t' element={<Products/>}/>
        </Routes>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
