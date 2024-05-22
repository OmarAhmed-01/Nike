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
import Women from './pages/Women/Women';
import Fav from './pages/Fav/Fav';
import Shop from './pages/Shop/Shop';
import Checkout from './pages/Checkout/Checkout';
import Verify from './pages/Verify/Verify';
import Orders from './pages/Orders/Orders';


function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin}/>: <></>}
      <div className=' app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/t/:Product_ID' element={<Products/>}/>
          <Route path='/w/:product_category/:product_sub_category' element={<Shop/>}/>1
          <Route path='/w/:product_category' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/men' element={<Men/>}/>
          <Route path='/women' element={<Women/>}/>
          <Route path='/golf' element={<Golf/>}/>
          <Route path='/favourites' element={<Fav/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/orders' element={<Orders/>}/>
        </Routes>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
