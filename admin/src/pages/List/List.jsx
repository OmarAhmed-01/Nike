import React, { useEffect, useState } from 'react'
import './list.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({ url }) => {

  const [list, setList] = useState([])

  const fetchList = async() => {
    const response = await axios.get(`${url}/products/list`)
    console.log(response.data)
    if(response.data.success){
      setList(response.data.data)
    }
    else{
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  const removeFood = async(foodID) => {
    const response  = await axios.post(`${url}/products/remove`, {id: foodID});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }
  }

  return (
    <div className='list add flex-col'>
      <p>Products List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Category</b>
          <b>SubCategory</b>
          <b>Price</b>
          <b>Colors</b>
          <b>Sizes</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return(
            <div className='list-table-format' key={index}>
              <img src={`${url}/images/`+item.img[0]} alt="" />
              <p>{item.label}</p>
              <p>{item.desc}</p>
              <p>{item.category}</p>
              <p>{item.subcategory}</p>
              <p>{item.price}</p>
              <p>{item.colors + " "}</p>
              <p style={{overflowX: "scroll"}}>{item.size+" "}</p>
              <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List