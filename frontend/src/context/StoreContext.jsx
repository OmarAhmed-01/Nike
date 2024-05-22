import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const [favItem, setFavItem] = useState({});
  const [cartItem, setCartItems] = useState({});
  const [size, setSize] = useState("");
  const [token, setToken] = useState("");
  const [products, setProducts] = useState([]); //initialise the products with an empty array

  const backend_url = "http://localhost:4000";

  const addToFav = async(itemId) => {
    if(!favItem[itemId]){
      setFavItem((prev) => ({...prev, [itemId]: 1}));
    }
    if(token){
      await axios.post(backend_url + '/api/favourites/add-fav', {itemId}, {headers: {token}})
    }
  }
  
  const removeFav = async(itemid) => {
    setFavItem((prev) => ({...prev, [itemid]: prev[itemid] - 1}));
    if(token){
      await axios.post(backend_url + '/api/favourites/add-fav', {itemid}, {headers: {token}})
    }
  }

  const addToCart = async(itemId) => {
    if (!cartItem[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token){
      await axios.post(backend_url + '/api/cart/add', {itemId}, {headers: {token}})
    }
  };

  const removeFromCart = async(itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(token){
      await axios.post(backend_url + '/api/cart/remove', {itemId}, {headers: {token}})
    }
  };

  const loadFavData = async(token) => {
    const response = await axios.post(backend_url + '/api/favourites/details-fav', {}, {headers: {token}})
    setFavItem(response.data.favData);
  }

  const loadCartData = async(token) => {
    const response = await axios.post(backend_url + '/api/cart/cart-details', {}, {headers: {token}})
    setCartItems(response.data.cartData);
  }

  const cartTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = products.find((product) => product._id === item);
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

  const fetch_products_list = async () => {
    const response  = await axios.get(backend_url + "/api/products/list") //sets response as the data from GET request from /api/products/list
    setProducts(response.data.data);
  }

  //when the page first loads creates a function called loadData which fetches the products list and sets the token as the token from the GET request
  useEffect(() => {
    async function loadData(){
      await fetch_products_list();
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
        await loadCartData(localStorage.getItem("token"));
        await loadFavData(localStorage.getItem("token"))
      }
    }
    loadData();
  }, []);

  const navigate = useNavigate();

  const handleSubCategory = (product_category, product_sub_category) => {
    navigate(`/w/${product_category}/${product_sub_category}`)
  }
  const handleShopClick = (product_category) => {
    navigate(`/w/${product_category}`);
  }
  const handleFavClick = () => {
    navigate('/favourites')
  }
  const handleCheckoutClick = () => {
    navigate('/checkout');
  }
  const handleProductClick = (Product_ID) => {
    navigate(`/t/${Product_ID}`);
  }
  const handleSize = (newSize) => {
    setSize(newSize);
  }
  const handleOrdersClick = () => {
    navigate('/orders');
  }


  const contextValue = {
    handleScrollLeft,
    handleScrollRight,
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
    setFavItem,
    addToFav,
    removeFav,
    handleFavClick,
    backend_url,
    token,
    setToken,
    handleCheckoutClick,
    handleOrdersClick,
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;