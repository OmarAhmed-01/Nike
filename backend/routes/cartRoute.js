import express from 'express'
import { add_to_cart, remove_from_cart, get_cart_details } from '../controllers/Cart_Controllers.js' //import cart controllers
import authMiddleWare from '../middleware/auth.js'; //import the middleware

const cartRouter = express.Router(); //setup express router as cartRoute

cartRouter.post('/add', authMiddleWare, add_to_cart); //send post request to /add carrying its functions
cartRouter.post('/remove', authMiddleWare, remove_from_cart); //send post request to /delete carrying its functions
cartRouter.post('/cart-details', authMiddleWare, get_cart_details); //send post request to /cart-details carrying its functions

export default cartRouter;
