import React from 'react'
import './navbar.css'
import { assets } from '../assets/assets.js'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="logo">
            <Link to='/'>
                <img src={assets.logo} alt="Logo" />
                <h1>Admin Panel</h1>
            </Link>    
        </div>
        <div className='items'>
            <ul className="navbar-menu">
                <Link to='/add'>Add</Link>
                <Link to='/list'>List</Link>
                <Link to='/orders'>Orders</Link>
            </ul>
        </div>
        <div className='admin-details'>
            <img src='#' alt="" />
            <h1>Name</h1>
        </div>
    </div>
  )
}

export default Navbar