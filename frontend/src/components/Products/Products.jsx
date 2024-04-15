import React from "react";
import "./products.css";
import { products_images, products } from "../../assets/assets";

const Products = () => {
  return (
    <>
      {products.map((item, index) => {
        return (
          <div className="product-container" key={item.id}>
            <div className="product-left">
              <div className="small-images">
                {/* Assuming you want to display the first image from the product */}
                {Array.isArray(item.img) ? (
                  item.img.map((image, idx) => (
                    <img key={idx} src={image} alt={`Image ${idx + 1}`} />
                  ))
                ) : (
                  <img src={item.img} alt="Image" />
                )}
              </div>
              <div className="big-image">
                {/* Assuming you want to display the first image from the product */}
                <img
                  src={Array.isArray(item.img) ? item.img[0] : item.img}
                  alt=""
                />
              </div>
            </div>
            <div className="product-right">
              <div className="product-details">
                <h1>{item.label}</h1>
                <h2>{item.desc}</h2>
                <p>${item.price}</p>
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
                <p>{item.desc}</p>
                <ul>
                  <li>Shown: {item.colors.join("/")}</li>
                  <li>Style: {item.id}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Products;
