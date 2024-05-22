import express from 'express';
import authMiddleWare from '../middleware/auth.js';
import { placeOrder, userOrders, verifyOrder } from '../controllers/Order_Controller.js';

const orderRouter = express.Router();

orderRouter.post("/place-order", authMiddleWare, placeOrder)
orderRouter.post("/verify", verifyOrder)
orderRouter.post("/user-orders", authMiddleWare, userOrders)

export default orderRouter;