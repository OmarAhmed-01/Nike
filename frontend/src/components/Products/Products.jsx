import React, { useContext, useEffect, useState } from "react";
import "./products.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useParams } from "react-router-dom";

const Products = () => {
  const { products, addToCart, handleSize, addToFav, backend_url } = useContext(StoreContext);
  const [product, setProduct] = useState(null);
  const [bigImage, setBigImage] = useState(null);
  const { Product_ID } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${backend_url}/api/products/list`);
        const productData = response.data.data.find(item => item._id === Product_ID);
        setProduct(productData);
        setBigImage(productData.img[0]);
      } catch (error) {
        console.log(error)
      }
    }
    fetchProduct();
  }, [backend_url, Product_ID])

  const handleImageHover = (image) => {
    setBigImage(image);
  };
  const handleSizeClick = (selectedSize) => {
    handleSize(selectedSize);
    console.log(selectedSize);
  };

  if (!product) {
    return <div>Loading...</div>; // Render loading state while product data is being fetched
  }

  return (
    <div className="product-container" key={product._id}>
      <div className="product-left">
        <div className="small-images">
          {Array.isArray(product.img) ? (
            product.img.map((image, idx) => (
              <img
                key={idx}
                src={`${backend_url}/images/${image}`}
                alt={`Image ${idx + 1}`}
                onMouseEnter={() => handleImageHover(image)}
                className={image === bigImage ? "active" : ""}
              />
            ))
          ) : (
            <img src={`${backend_url}/images/${product.img}`} alt="Image" />
          )}
        </div>
        <div className="big-image">
          <img src={`${backend_url}/images/${bigImage}`} alt="" />
        </div>
      </div>
      <div className="product-right">
        <div className="product-details">
          <h1>Nike {product.label}</h1>
          <h2>{product.desc}</h2>
          <p>${product.price}</p>
        </div>
        <div className="product-sizes">
          <div className="product-sizes-guide">
            <h1>Select Size</h1>
            <h2>Size Guide</h2>
          </div>
          <div className="product-sizes-buttons">
            {product.size.map((item, index) => {
              return (
                <button key={index} onClick={() => handleSizeClick(item)}>
                  {item.trim()}
                </button>
              );
            })}
          </div>
        </div>
        <div className="order-button">
          <p>
            4 interest-free payments. Available for orders above $35.{" "}
            <span>Klarna</span>
          </p>
          <button className="add-button" onClick={() => addToCart(product._id)}>Add to Bag</button>
          <button className="favourite-button" onClick={() => addToFav(product._id)}>Favourite</button>
        </div>
        <div className="shipping">
          <h1>Shipping</h1>
          <p>You'll see our shipping options at checkout</p>
          <h1>Free Pickup</h1>
          <p>Find a Store</p>
        </div>
        <div className="desc">
          <p>{product.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
