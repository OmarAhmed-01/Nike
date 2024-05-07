import express from 'express'
import cors from 'cors'
import { Connect_Database } from './config/db.js'
import productRouter from './routes/productRoute.js'

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//database connection
Connect_Database();

//api endpoints
app.use("/products", productRouter)
app.use("/images", express.static('uploads'))

app.get("/", (req, res) => {
    res.send("API WORKING")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://omarahmedm:yRp6hkQcFGNHg24m@cluster0.8wximot.mongodb.net/?