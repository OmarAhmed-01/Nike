import React from 'react'
import './home.css'
import { assets } from '../../assets/assets'
import Header from '../../components/Header/Header'
import Trending from '../../components/Trending/Trending'
import Popular from '../../components/Popular/Popular'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Trending/>
        <Popular/>
    </div>
  )
}

export default Home