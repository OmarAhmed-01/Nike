import React, { useContext } from 'react'
import './shop.css'
import { StoreContext } from '../../context/StoreContext';
import { useParams } from 'react-router-dom';

const Shop = () => {

    const { products, backend_url } = useContext(StoreContext);

    const { handleProductClick } = useContext(StoreContext);
    const { product_category } = useParams();
    const { product_sub_category} = useParams();

    let filteredProducts;
    let shop_header;

    if (product_category && product_sub_category){
        filteredProducts = products.filter(item => item.category.includes(product_category) && item.subcategory.includes(product_sub_category))
        const firstProduct = filteredProducts[0];
        if (firstProduct.category.length > 1){
            shop_header = firstProduct.subcategory
        }
        else{
            shop_header = firstProduct.category
        }
    }
    else if(product_category){
        filteredProducts = products.filter(item => item.category.includes(product_category))
        const firstProduct = filteredProducts[0];
        if (firstProduct.category.length > 1){
            shop_header = firstProduct.subcategory
        }
        else{
            shop_header = firstProduct.category
        }
    }
    else{
        filteredProducts = products;
        shop_header = "All Products";
    }

  return (
    <div className='shop-container'>
        <div className="shop-products">
            <h1>{`${shop_header} (${filteredProducts.length})`}</h1>
            <div className="cart">
                {
                    filteredProducts.map((item, index) => {
                        return(
                            <div className="list-items" key={index} onClick={() => handleProductClick(item._id)}>
                                <img src={backend_url + "/images/" + item.img[0]} alt="" />
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