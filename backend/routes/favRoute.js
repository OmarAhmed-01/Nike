import express from 'express';
import { add_to_favourite, remove_from_favourite, get_favourite } from '../controllers/Fav_Controller.js';
import authMiddleWare from '../middleware/auth.js';

const favRouter = express.Router();

favRouter.post('/add-fav', authMiddleWare, add_to_favourite);
favRouter.post('/remove-fav', authMiddleWare, remove_from_favourite);
favRouter.post('/details-fav', authMiddleWare, get_favourite);

export default favRouter;