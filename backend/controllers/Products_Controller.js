import Product_Model from '../models/ProductModels.js';
import fs from 'fs'

//add product item
const add_product = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const product = new Product_Model({
        label: req.body.label,
        desc: req.body.desc,
        price: req.body.price,
        img: image_filename,
        category: req.body.category,
        subcategory: req.body.subcategory,
        size: req.body.size,
        colors: req.body.colors,
        // popular: req.body.popular,
        // new: req.body.new
    })

    try {
        await product.save();
        res.json({success: true, message: "Product Added"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"})
    }
}

//product list
const list_products = async (req, res) => {
    try {
        const products = await Product_Model.find({});
        res.json({success: true, data:products})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"})
    }
}

//remove item
const remove_product = async (req, res) => {
    try {
        const product = await Product_Model.findById(req.body.id);
        fs.unlink(`uploads/${product.img}`, () => {})

        await Product_Model.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Product Removed"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"})
    }
}
export { add_product, list_products, remove_product }