import React, { useEffect, useState } from 'react'
import './add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = () => {

    const url = "http://localhost:4000";
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        label: "",
        desc: "",
        price: "",
        category: "",
        subcategory: "",
        colors: "",
        sizes: "",
        // popular: "",
        // new: ""
    })

    const onSubmitHandler = async (event) => {

        const colorsArray = data.colors.split(",").map(color => color.trim());
        const sizesArray = data.sizes.split(',').map(size => size.trim());

        event.preventDefault();
        const formData = new FormData();
        formData.append("label", data.label)
        formData.append("desc", data.desc)
        formData.append("price", data.price)
        formData.append("category", data.category)
        formData.append("subcategory", data.subcategory)
        formData.append("colors", JSON.stringify(colorsArray))
        formData.append("size", data.sizes)
        // formData.append("popular", data.popular)
        // formData.append("new", data.new)
        formData.append("img", image)

        const response = await axios.post(`${url}/products/add`, formData)
        if(response.data.success){
            setData({
                label: "",
                desc: "",
                price: "",
                category: "",
                subcategory: "",
                colors: "",
                sizes: "",
                // popular: "",
                // new: ""
            })
            setImage(false)
            toast.success(response.data.message)
        }
    }

    

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value

        setData(data => ({ ...data, [name]: value }));
    }

    useEffect(() => {
        console.log(data);
    }, [data])

  return (
    <div className='add'>
        <form action="" className="flex-col form" onSubmit={onSubmitHandler}>
            <div className="details flex-row">
                <div className="details-left flex-col">
                    <div className="add-img-upload flex-col">
                        <p>Upload image</p>
                        <label htmlFor="image">
                            <img src={image ? URL.createObjectURL(image) :assets.upload_sign} alt="" />
                        </label>
                        <input type="file" id='image' onChange={(e) => setImage(e.target.files[0])} hidden required />
                    </div>
                    <div className="add-product-name flex-col">
                        <p>Product Name</p>
                        <input onChange={onChangeHandler} value={data.label} type="text" name='label' placeholder='Product Name...'/>
                    </div>
                    <div className="add-product-desc flex-col">
                        <p>Product Description</p>
                        <textarea onChange={onChangeHandler} value={data.desc} name='desc' rows="6" placeholder='Product Desc...'/>
                    </div>
                    <div className="add-category-subcategory-price flex-col">
                        <div className="add-category flex-col">
                            <p>Product Category</p>
                            <select onChange={onChangeHandler} value={data.category} name="category">
                                <option value="">Select</option>
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="Golf">Golf</option>
                            </select>
                        </div>
                        <div className="add-subcategory flex-col">
                            <p>Product Subcategory</p>
                            <select onChange={onChangeHandler} value={data.subcategory} name="subcategory">
                                <option value="">Select</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Shoes">Shoes</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Bras">Bras</option>
                                <option value="Equipment">Equipment</option>
                                <option value="Pros">Pros</option>
                            </select>
                        </div>
                        <div className="add-price flex-col">
                            <p>Product Price</p>
                            <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$'/>
                        </div>
                    </div>
                </div>
                <div className="details-right flex-col">
                    <div className='add-colors-sizes flex-col'>
                        <div className="add-colors flex-col">
                            <p>Product Colors</p>
                            <input onChange={onChangeHandler} value={data.colors} type="text" name='colors' placeholder='Black'/>
                        </div>
                        <div className="add-sizes flex-col">
                            <p>Product Sizes</p>
                            <input onChange={onChangeHandler} value={data.sizes} type="text" name='sizes' placeholder='XS'/>
                        </div>
                    </div>
                    <div className="add-popular-new flex-col">
                        {/* <div className="add-popular flex-col">
                            <label>
                                <input type="checkbox" name="popular" onChange={onChangeHandler} checked={checkbox1} />
                                Popular Product
                            </label>
                        </div>
                        <div className="add-new flex-col">
                            <label>
                                <input type="checkbox" name="new" onChange={onChangeHandler} checked={checkbox2} />
                                New Product
                            </label>
                        </div> */}
                        <button type='submit' className='add-btn'>Add Product</button> 
                    </div>
                </div>           
            </div>           
        </form>
    </div>
  )
}

export default Add