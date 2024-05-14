import React, { useEffect, useState } from 'react';
import './navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom'

const Navbar = ({ setShowLogin }) => { 

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuChange = () => {
        setMenuOpen(!menuOpen);
    } 

    useEffect(() => {
        console.log(menuOpen)
    }, [menuOpen])

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
            <Link to='/favourites'>
                <img src={assets.heart} className='fav-icon' alt="" />
            </Link>
            <button className=' signIn-button' onClick={() => setShowLogin(true)}>Sign in</button>
        </div>
        <img className='burger-menu' onClick={handleMenuChange} src={assets.burgerMenu} alt="" />
    </div>
  )
}

export default Navbar