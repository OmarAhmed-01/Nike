import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import { assets, products } from "../../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const { handleProductClick, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  }

  const searchedProduct = products.filter((item) =>
    item.label.includes(search)
  );

  const handleMenuChange = () => {
    setMenuOpen(!menuOpen);
  };

  const onSearchChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(search);
    setIsSearching(!isSearching);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    setIsSearching(false);
  }, [location.pathname]);

  useEffect(() => {
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
    }
  }, []);

  return (
    <>
      <div className=" navbar">
        <Link to="/">
          <img src={assets.logo} className=" logo" alt="Nike Logo" />
        </Link>
        <ul className=" navbar-menu">
          <Link to="/new">New & Featured</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/golf">Golf</Link>
          <Link to="/shop">Shop</Link>
        </ul>
        <div className=" navbar-right">
          <form className=" search-bar" onSubmit={handleFormSubmit}>
            <div className="search-icon">
              <img src={assets.search} />
            </div>
            <input onChange={onSearchChange} type="text" placeholder="Search" />
          </form>
          <Link to="/cart">
            <img src={assets.cart} className=" cart-icon" />
          </Link>
          <Link to="/favourites">
            <img src={assets.heart} className="fav-icon" alt="" />
          </Link>
          {!token ? (
            <button
              className=" signIn-button"
              onClick={() => setShowLogin(true)}
            >
              Sign in
            </button>
          ) : (
            <div className="navbar-profile">
              <img src={assets.profile} alt="" />
              <ul className="navbar-drop-menu">
                <li><img src={assets.orders} alt="" /><p>Orders</p></li>
                <li onClick={logout}><img src={assets.logout} alt="" /><p>Logout</p></li>
              </ul>
            </div>
          )}
        </div>
        <img
          className={menuOpen ? "closed" : "burger-menu"}
          onClick={handleMenuChange}
          src={assets.burgerMenu}
          alt=""
        />
        <div className={menuOpen ? "menu" : "closed"}>
          <img src={assets.close} onClick={handleMenuChange} alt="" />
          <ul className="menu-lists">
            <Link to="/new">New & Featured</Link>
            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/golf">Golf</Link>
            <Link to="/shop">Shop</Link>
          </ul>
          <div className="extras">
            <Link to="/cart">
              <img src={assets.cart} className=" cart-icon" />
            </Link>
            <Link to="/favourites">
              <img src={assets.heart} className="fav-icon" alt="" />
            </Link>
          </div>
        </div>
      </div>
      {isSearching && search ? (
        <div className="search">
          <div className="filteredProducts">
            {searchedProduct.map((item, index) => {
              return (
                <div key={index} className="list-item">
                  <img src={item.img[0]} alt="" />
                  <h1>Nike {item.label}</h1>
                  <h2>{item.desc}</h2>
                  <p>${item.price}</p>
                  <button onClick={() => handleProductClick(item.id)}>
                    Go to product
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
