import express from 'express';
import authMiddleWare from '../middleware/auth.js';
import { placeOrder, verifyOrder } from '../controllers/Order_Controller.js';

const orderRouter = express.Router();

orderRouter.post("/place-order", authMiddleWare, placeOrder)
orderRouter.post("/verify", verifyOrder)

export default orderRouter;