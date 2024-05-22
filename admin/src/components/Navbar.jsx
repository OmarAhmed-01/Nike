import React, { useEffect, useState } from "react";
import "./navbar.css";
import { assets } from "../assets/assets.js";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuChange = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname]);

  return (
    <div className="navbar-container">
      <div className="logo">
        <Link to="/">
          <img src={assets.logo} alt="Logo" />
          <h1>Admin Panel</h1>
        </Link>
      </div>
      <div className="items">
        <ul className="navbar-menu">
          <Link to="/add">Add</Link>
          <Link to="/list">List</Link>
          <Link to="/orders">Orders</Link>
        </ul>
      </div>
      <div className="admin-details">
        <h1>Admin</h1>
      </div>
      <div className={menuOpen ? "menuClosed":"open-menu"}>
        <img src={assets.burgerMenu} onClick={handleMenuChange} alt="" />
      </div>
      <div className={menuOpen ? "menu":"menuClosed"}>
        <img
          src={assets.closeMenu}
          onClick={handleMenuChange}
          alt=""
        />
        <div className={menuOpen ? "menu-list" : "menuClosed"}>
          <div className="menu-items">
            <ul className="navbar-menu-items">
              <Link to="/add">Add</Link>
              <Link to="/list">List</Link>
              <Link to="/orders">Orders</Link>
            </ul>
          </div>
          <div className="menu-admin-details">
            <h1>Admin</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <div className="menu">
        <div className="burger-menu">
          <img
            src={menuOpen ? assets.closeMenu : assets.burgerMenu}
            onClick={() => handleMenuChange(!menuOpen)}
            alt=""
          />
        </div>
        
      </div> */
}
