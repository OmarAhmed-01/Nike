import express from 'express'
import { add_product, list_products, remove_product } from '../controllers/Products_Controller.js'
import multer from 'multer'

const productRouter = express.Router();

//image storage
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})
const upload = multer({storage: storage})

productRouter.post("/add", upload.array("img"), add_product);
productRouter.get("/list", list_products)
productRouter.post("/remove", remove_product)

export default productRouter;