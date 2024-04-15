import React from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import Trending from '../../components/Trending/Trending'
import Popular from '../../components/Popular/Popular'

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