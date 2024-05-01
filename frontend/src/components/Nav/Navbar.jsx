import React from 'react';
import './navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom'

const Navbar = ({ setShowLogin }) => {

  return (
    <div className=' navbar'>
        <Link to='/'>
            <img src={assets.logo} className=' logo' alt='Nike Logo'/>
        </Link>
        <ul className=' navbar-menu'>
            <Link to='/new'>New & Featured</Link>
            <Link to='/men'>Men</Link>
            <Link to='/women'>Women</Link>
            <Link to='/golf'>Golf</Link>
        </ul>
        <div className=' navbar-right'>
            <form className=' search-bar'>
                <div className='search-icon'>
                    <img src={assets.search}/>
                </div>
                <input type='text' placeholder='Search'/>
            </form>
            <Link to='/cart'>
                <img src={assets.cart} className=' cart-icon'/>
            </Link>
            <button className=' signIn-button' onClick={() => setShowLogin(true)}>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar