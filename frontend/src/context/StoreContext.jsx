import { createContext, useContext } from "react";
import { useNavigate } from 'react-router-dom'
export const StoreContext = createContext(null);
import { golf, products_images } from '../assets/assets'

const StoreContextProvider = (props) => {

  const navigate = useNavigate();

  const handleGolfClick = () => {
    navigate('/w/golf-and-lifestyle');
  }
  const handleProductClick = (label, id) => {
    navigate(`/t`);
  }

  const contextValue = {
    handleGolfClick,
    handleProductClick,
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;