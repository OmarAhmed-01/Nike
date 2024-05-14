import { createContext, useContext, useState, useRef } from "react";
import { useNavigate, useParams } from 'react-router-dom'
export const StoreContext = createContext(null);
import { products_images, products } from '../assets/assets'

const StoreContextProvider = (props) => {

  const [favItem, setFavItem] = useState({});
  const [cartItem, setCartItems] = useState({});
  const [size, setSize] = useState("");

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

  const handleSubCategory = (product_category, product_sub_category) => {
    navigate(`/w/${product_category}/${product_sub_category}`)
  }
  const handleShopClick = (product_category) => {
    navigate(`/w/${product_category}`);
  }
  //====================================//
  // const handleGolfClick = () => {
  //   navigate('/w/golf-and-lifestyle');
  // }
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
    // handleGolfClick,
    handleProductClick,
    products,
    addToCart,
    removeFromCart,
    cartTotalAmount,
    cartItem,
    size,
    handleSize,
    handleShopClick,
    handleSubCategory,
    favItem,
    addToFav,
    removeFav,
    handleFavClick,
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;