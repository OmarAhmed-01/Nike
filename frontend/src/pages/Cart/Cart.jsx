import React, { useContext, useState } from "react";
import "./cart.css";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

const Cart = () => {

  const { cartItem, removeFromCart, cartTotalAmount, size, addToFav, products, backend_url, handleCheckoutClick } = useContext(StoreContext);

  return (
    <div className=" wrapper">
      <div className=" product-container">
        <div className="left">
          <h1>Bag</h1>
          {products.map((item, index) => {
            if (cartItem[item._id] > 0) {
              return (
                <div key={index} className="cart-items-item">
                  <div className=" image-details">
                    <div className=" image">
                      <img src={backend_url + '/images/' + item.img[0]} />
                    </div>
                    <div className="details">
                      <div className=" details-details">
                        <h1>Nike {item.label}</h1>
                        <p>{item.category + ""}</p>
                        <div className=" size-quantity">
                          <p>Size {size}</p>
                          <p>Quantity {cartItem[item._id]}</p>
                        </div>
                      </div>
                      <div className="price">
                        <p>${item.price}</p>
                        <div className=" images">
                          <img src={assets.heart} onClick={() => addToFav(item._id)} alt="" />
                          <img
                            src={assets.trash}
                            onClick={() => removeFromCart(item._id)}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="right">
          <h1>Summary</h1>
          <div className="details">
            <div className="subtotal">
              <p>Subtotal</p>
              <p>${cartTotalAmount()}</p>
            </div>
            <div className="delivery">
              <p>Estimated Shipping & Handling</p>
              <p>${cartTotalAmount() === 0 ? 0 : 8}</p>
            </div>
            <div className="tax">
              <p>Estimated Tax</p>
              <p>-</p>
            </div>
            <hr />
            <div className="total">
              <p>Total</p>
              <p>${cartTotalAmount() === 0 ? 0 : cartTotalAmount() + 8}</p>
            </div>
            <hr />
            <div className="checkout-btn">
              <button onClick={handleCheckoutClick}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
