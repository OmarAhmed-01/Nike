import { createContext, useContext } from "react";
import { useNavigate, useParams } from 'react-router-dom'
export const StoreContext = createContext(null);
import { golf, products_images, products } from '../assets/assets'

const StoreContextProvider = (props) => {

  const navigate = useNavigate();

  const handleGolfClick = () => {
    navigate('/w/golf-and-lifestyle');
  }
  const handleProductClick = (Product_ID) => {
    navigate(`/t/${Product_ID}`);
  }

  const contextValue = {
    handleGolfClick,
    handleProductClick,
    products,
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;