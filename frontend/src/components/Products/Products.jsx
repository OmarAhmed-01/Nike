import React, { useContext } from "react";
import "./products.css";
// import { products_images, products } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { useParams } from "react-router-dom";

const Products = () => {
  const { products } = useContext(StoreContext);

  const { Product_ID } = useParams();
  const product = products.find((item) => item.id === Product_ID);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-container" key={product.id}>
      <div className="product-left">
        <div className="small-images">
          {/* Assuming you want to display the first image from the product */}
          {Array.isArray(product.img) ? (
            product.img.map((image, idx) => (
              <img key={idx} src={image} alt={`Image ${idx + 1}`} />
            ))
          ) : (
            <img src={product.img} alt="Image" />
          )}
        </div>
        <div className="big-image">
          {/* Assuming you want to display the first image from the product */}
          <img
            src={Array.isArray(product.img) ? product.img[0] : product.img}
            alt=""
          />
        </div>
      </div>
      <div className="product-right">
        <div className="product-details">
          <h1>{product.label}</h1>
          <h2>{product.desc}</h2>
          <p>${product.price}</p>
        </div>
        <div className="product-sizes">
          <div className="product-sizes-guide">
            <h1>Select Size</h1>
            <h2>Size Guide</h2>
          </div>
          <div className="product-sizes-buttons">
            <button>S</button>
          </div>
        </div>
        <div className="order-button">
          <p>
            4 interest-free payments. Available for orders above $35.{" "}
            <span>Klarna</span>
          </p>
          <button className="add-button">Add to Bag</button>
          <button className="favourite-button">Favourite</button>
        </div>
        <div className="shipping">
          <h1>Shipping</h1>
          <p>You'll see our shipping options at checkout</p>
          <h1>Free Pickup</h1>
          <p>Find a Store</p>
        </div>
        <div className="desc">
          <p>{product.desc}</p>
          <ul>
            <li>Shown: {product.colors.join("/")}</li>
            <li>Style: {product.id}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
