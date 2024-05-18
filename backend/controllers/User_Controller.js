import userModel from "../models/UserModels.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'; //used to hash the plain text password
import validator from 'validator'; //used to validate the form of the email

//login user
const loginUser = async(req, res) => {

}

//register user
const registerUser = async (req, res) => {
    const {email, password, name} = req.body; //get the email, password, name from the post request made on register
    try {
        const exist = await userModel.findOne({email}) //checking if the email typed in register is already there in the user database
        if(exist){
            return(
                res.json({success: false, message: "User already exists"}) //if email already exists sends a false success with a message of "user already exists"
            )
        }

        //check if email entered has a an email format if it isnt, server response with an error message  
        if(!validator.isEmail(email)){
            return(
                res.json({success: false, message: "Enter a valid email address"})
            )
        }
        //check if password entered is longer than 8 character if it isnt, server response with an error message
        if(password.length < 8){
            return(
                res.json({success: false, message: "Enter a strong password"})
            )
        }
    } catch (error) {
        
    }
}

export { loginUser, registerUser }