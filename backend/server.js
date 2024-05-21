import express from 'express'
import cors from 'cors'
import { Connect_Database } from './config/db.js'
import productRouter from './routes/productRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import favRouter from './routes/favRoute.js'
import orderRouter from './routes/orderRoute.js'

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//database connection
Connect_Database();

//api endpoints
app.use("/api/products", productRouter);
app.use("/images", express.static('uploads'));
app.use("/api/users", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/favourites", favRouter);
app.use('/api/orders', orderRouter);

app.get("/", (req, res) => {
    res.send("API WORKING")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://omarahmedm:yRp6hkQcFGNHg24m@cluster0.8wximot.mongodb.net/?