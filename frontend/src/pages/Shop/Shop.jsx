import React, { useContext } from 'react'
import './shop.css'
import { products } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { useParams } from 'react-router-dom';

const Shop = () => {

    const { handleProductClick } = useContext(StoreContext);
    const { product_category } = useParams();
    const { product_sub_category} = useParams();
    const filteredProducts = product_sub_category ?
        products.filter(item => item.category.includes(product_category) && item.subcategory.includes(product_sub_category)) :
        products.filter(item => item.category.includes(product_category));

    console.log(filteredProducts);

  return (
    <div className='shop-container'>
        <div className="shop-products">
            <h1>Shop ({filteredProducts.length})</h1>
            <div className="cart">
                {
                    filteredProducts.map((item, index) => {
                        return(
                            <div className="list-items" key={index} onClick={() => handleProductClick(item.id)}>
                                <img src={item.img[0]} alt="" />
                                <h1>Nike {item.label}</h1>
                                <h2>{item.desc}</h2>
                                <h3>{item.colors.length} Colors</h3>
                                <p>${item.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Shop