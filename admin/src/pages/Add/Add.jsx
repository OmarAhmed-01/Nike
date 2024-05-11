import React, { useState } from 'react'
import './add.css'
import { assets } from '../../assets/assets'

const Add = () => {

    const [files, setFiles] = useState([]);
    
    const handleFileChange = (event) => {
        const uploadedFiles = Array.from(event.target.files);
        setFiles(prevFiles => [...prevFiles, ...uploadedFiles]);
        console.log(files)
    }

  return (
    <div className='add'>
        <form action="" className="flex-col form">
            <div className="details flex-row">
                <div className="details-left flex-col">
                    <div className="add-img-upload flex-col">
                        <p>Upload image</p>
                        <label htmlFor="image">
                            {files.length === 0 ? (
                                <img src={assets.upload_sign} alt="" />
                            ) : (
                                <img src={URL.createObjectURL(files[files.length - 1])} alt="Last Uploaded" />
                            )}
                        </label>
                        <input type="file" id='image' onChange={handleFileChange} multiple hidden required />
                        <p>{files.map((file, index) => (
                            <li>{file.name}</li>
                        ))}</p>
                    </div>
                    <div className="add-product-name flex-col">
                        <p>Product Name</p>
                        <input type="text" name='name' placeholder='Product Name...'/>
                    </div>
                    <div className="add-product-desc flex-col">
                        <p>Product Description</p>
                        <textarea name='name' rows="6" placeholder='Product Desc...'/>
                    </div>
                    <div className="add-category-subcategory-price flex-col">
                        <div className="add-category flex-col">
                            <p>Product Category</p>
                            <select name="category">
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="Golf">Golf</option>
                            </select>
                        </div>
                        <div className="add-subcategory flex-col">
                            <p>Product Subcategory</p>
                            <select name="subcategory">
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
                            <input type="Number" name='price' placeholder='$'/>
                        </div>
                    </div>
                </div>
                <div className="details-right flex-col">
                    <div className='add-colors-sizes flex-col'>
                        <div className="add-colors flex-col">
                            <p>Product Colors</p>
                            <input type="text" name='colors' placeholder='Black'/>
                        </div>
                        <div className="add-sizes flex-col">
                            <p>Product Sizes</p>
                            <input type="text" name='sizes' placeholder='XS'/>
                        </div>
                    </div>
                    <div className="add-popular-new flex-col">
                        <div className="add-popular flex-col">
                            <p>Product Popular</p>
                            <select name="popular">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="add-new flex-col">
                            <p>Product New</p>
                            <select name="new">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <button type='submit' className='add-btn'>Add Product</button> 
                    </div>
                </div>           
            </div>           
        </form>
    </div>
  )
}

export default Add