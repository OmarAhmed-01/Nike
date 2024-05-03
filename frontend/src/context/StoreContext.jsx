import { createContext, useContext, useState, useRef } from "react";
import { useNavigate, useParams } from 'react-router-dom'
export const StoreContext = createContext(null);
import { products_images, products } from '../assets/assets'

const StoreContextProvider = (props) => {

  const [favItem, setFavItem] = useState({});
  const [cartItem, setCartItems] = useState({});
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");

  const addToFav = (itemId) => {
    setFavItem((prev) => ({...prev, [itemId]: 1}));
  }
  const removeFav = (itemid) => {
    setFavItem((prev) => ({...prev, [itemid]: prev[itemid] - 1}));
  }

  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const cartTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = products.find((product) => product.id === item);
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const handleScrollLeft = (ref) => {
    if (ref.current) {
        ref.current.scrollTo({
        left: ref.current.scrollLeft - 600, // Adjust the scroll distance as needed
        behavior: 'smooth' // Smooth scrolling
        });
    }
};

const handleScrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollTo({
        left: ref.current.scrollLeft + 600, // Adjust the scroll distance as needed
        behavior: 'smooth' // Smooth scrolling
        });
    }
};

  const navigate = useNavigate();
  const handleWomenClick = () =>{
    navigate('/w/women-shop')
  }
  const handleWomenClothes = () => {
    navigate('/w/women-clothes')
  }
  const handleWomenShoes = () => {
    navigate('/w/women-shoes')
  }
  const handleWomenAccess = () => {
    navigate('/w/women-access')
  }
  const handleWomenBras = () => {
    navigate('/w/women-bras-leggings')
  }
  //====================================//
  const handleMenShoes = () => {
    navigate('/w/men-shoes');
  }
  const handleMenClothes = () => {
    navigate('/w/men-clothes')
  }
  const handleMenAccess = () => {
    navigate('/w/men-access')
  }
  const handleMenClick = () => {
    navigate('/w/men-shop');
  }
  //====================================//
  const handleGolfClick = () => {
    navigate('/w/golf-and-lifestyle');
  }
  const handleGolfApparel = () => {
    navigate('/w/golf-clothing')
  }
  const handleGolfEquipment = () => {
    navigate('/w/golf-accessories-equipment')
  }
  const handleGolfShoes = () => {
    navigate('/w/golf-shoes')
  }
  const handleGolfPros = () => {
    navigate('/w/golf-pros')
  }
  //====================================//
  const handleFavClick = () => {
    navigate('/favourites')
  }
  const handleProductClick = (Product_ID) => {
    navigate(`/t/${Product_ID}`);
  }
  const handleSize = (newSize) => {
    setSize(newSize);
    console.log(newSize);
  }


  const contextValue = {
    handleScrollLeft,
    handleScrollRight,
    handleGolfClick,
    handleProductClick,
    products,
    addToCart,
    removeFromCart,
    cartTotalAmount,
    cartItem,
    size,
    handleSize,
    handleMenClick,
    handleMenClothes,
    handleMenShoes,
    handleMenAccess,
    handleWomenClick,
    handleWomenClothes,
    handleWomenShoes,
    handleWomenAccess,
    handleWomenBras,
    handleGolfApparel,
    handleGolfEquipment,
    handleGolfShoes,
    handleGolfPros,
    favItem,
    addToFav,
    removeFav,
    handleFavClick
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;