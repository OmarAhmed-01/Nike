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
import WomenShop from './pages/Women/WomenShop';
import WomenShoes from './pages/Women/WomenShoes';
import WomenClothing from './pages/Women/WomenClothing';
import WomenAccess from './pages/Women/WomenAccess';
import WomenBrasLeggings from './pages/Women/WomenBras';
import GolfShop from './pages/Golf/GolfShop';
import GolfApparels from './pages/Golf/GolfApparels';
import GolfShoes from './pages/Golf/GolfShoes';
import GolfEquipment from './pages/Golf/GolfEquipment';
import GolfPros from './pages/Golf/GolfPros';
import Fav from './pages/Fav/Fav';
import Shop from './pages/Shop/Shop';

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
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/shop' element={<Shop/>}/>
          //======================================//
          <Route path='/men' element={<Men/>}/>
          <Route path='/w/men-shop' element={<MensShop/>}/>
          <Route path='/w/men-clothes' element={<MenClothes/>}/>
          <Route path='/w/men-shoes' element={<MenShoes/>}/>
          <Route path='/w/men-access' element={<MenAccess/>}/>
          //======================================//
          <Route path='/women' element={<Women/>}/>
          <Route path='/w/women-shop' element={<WomenShop/>}/>
          <Route path='/w/women-clothes' element={<WomenClothing/>}/>
          <Route path='/w/women-shoes' element={<WomenShoes/>}/>
          <Route path='/w/women-access' element={<WomenAccess/>}/>
          <Route path='/w/women-bras-leggings' element={<WomenBrasLeggings/>}/>
          //======================================//
          <Route path='/golf' element={<Golf/>}/>
          <Route path='/w/golf-and-lifestyle' element={<GolfShop/>}/>
          <Route path='/w/golf-clothing' element={<GolfApparels/>}/>
          <Route path='/w/golf-shoes' element={<GolfShoes/>}/>
          <Route path='/w/golf-accessories-equipment' element={<GolfEquipment/>}/>
          <Route path='/w/golf-pros' element={<GolfPros/>}/>
          //======================================//
          <Route path='/favourites' element={<Fav/>}/>
        </Routes>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
