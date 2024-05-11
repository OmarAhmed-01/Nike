import mongoose from "mongoose";

const product_Schema = new mongoose.Schema({
    label: {type: String, required: true},
    desc: {type: String, required: true},
    price: {type: Number, required: true},
    img: [{type: String, required: true}], //array of strings representing the image
    category: {type: String, required: true},
    subcategory: {type: String, required: true},
    size: [{type: String, required: true}], //array of strings representing the size
    colors: [{type: String, required: true}],
    // popular: {type: Boolean, required: true},
    // new: {type: Boolean, required: true}
})

const Product_Model = mongoose.models.find || mongoose.model("products", product_Schema)

export default Product_Model