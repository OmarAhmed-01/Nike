import React, { useState } from 'react';
import Navbar from './components/Nav/Navbar';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Golf from './pages/Golf/Golf';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import Cart from './pages/Cart/Cart';
import Men from './pages/Men/Men';
import MensShop from './pages/Men/MensShop';
import MenClothes from './pages/Men/MenClothes';
import MenAccess from './pages/Men/MenAccess';
import MenShoes from './pages/Men/MenShoes';
import Women from './pages/Women/Women';

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
          <Route path='/t/:Product_ID' element={<Products/>}/>
          <Route path='/cart' element={<Cart/>}/>
          //======================================//
          <Route path='/men' element={<Men/>}/>
          <Route path='/w/men-shop' element={<MensShop/>}/>
          <Route path='/w/men-clothes' element={<MenClothes/>}/>
          <Route path='/w/men-shoes' element={<MenShoes/>}/>
          <Route path='/w/men-access' element={<MenAccess/>}/>
          //======================================//
          <Route path='/women' element={<Women/>}/>
          <Route path='/w/women-shop' element/>
          <Route path='/w/women-clothes' element/>
          <Route path='/w/women-shoes' element/>
          <Route path='/w/women-access' element/>
          <Route path='/w/women-bras' element/>
        </Routes>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
