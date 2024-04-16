import { createContext, useContext, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom'
export const StoreContext = createContext(null);
import { golf, products_images, products } from '../assets/assets'

const StoreContextProvider = (props) => {

  const [cartItem, setCartItems] = useState({});
  const [size, setSize] = useState("");

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

  const navigate = useNavigate();

  const handleGolfClick = () => {
    navigate('/w/golf-and-lifestyle');
  }
  const handleProductClick = (Product_ID) => {
    navigate(`/t/${Product_ID}`);
  }
  const handleSize = (newSize) => {
    setSize(newSize);
    console.log(newSize);
  }


  const contextValue = {
    handleGolfClick,
    handleProductClick,
    products,
    addToCart,
    removeFromCart,
    cartTotalAmount,
    cartItem,
    size,
    handleSize,
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;