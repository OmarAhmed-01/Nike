import express from 'express' //import express package from express library
import { loginUser, registerUser } from '../controllers/User_Controller.js' //import loginUser, registerUser function from the User_Controller JS file

const userRouter = express.Router(); //creates a new express router object names userRouter

userRouter.post('/register', registerUser); //send a post request to /register carrying the registerUser function
userRouter.post('/login', loginUser); //send a post request to /login carrying the loginUser function

export default userRouter;