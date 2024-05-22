import express from 'express';
import authMiddleWare from '../middleware/auth.js';
import { listOrders, placeOrder, userOrders, verifyOrder, updateStatus } from '../controllers/Order_Controller.js';

const orderRouter = express.Router();

orderRouter.post("/place-order", authMiddleWare, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/user-orders", authMiddleWare, userOrders);
orderRouter.get('/list', listOrders);
orderRouter.post('/status', updateStatus)

export default orderRouter;