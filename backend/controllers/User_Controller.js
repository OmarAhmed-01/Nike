import userModel from "../models/UserModels.js";
import jwt from 'jsonwebtoken';
import bcrypt, { hash } from 'bcrypt'; //used to hash the plain text password
import validator from 'validator'; //used to validate the form of the email
import 'dotenv/config'

//login user
const loginUser = async(req, res) => {
    const { email, password } = req.body; //get the email, password from the post request made on login
    try {
        const user = await userModel.findOne({email}); //set the user to the email found in the database that matches
        const isMatch = await bcrypt.compare(password, user.password); //compares the password in the body with the password registered with

        if(!isMatch){
            res.json({success: false, success: "Incorrect Password or Email"}) //if passwords dont match send an error message
        }

        if(!user){
            res.json({success: false, message: "Not found"}) //if email not found throw an error message
        }
        const token  = createToken(user._id);   
        res.json({success: true, message: "User found", token}) //if all is well server responds with success, token and "User found"
    } catch (error) {
        console.log(error);
        res.json({success: true, message: "Error"}) //else throw error
    }
}

//creating a token
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
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

        //to hash the password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        //creates a new user when registering with name, email, password got the req.body made by the POST request 
        const newUser = new userModel({
            name: name,
            email: email,
            password: hash
        })

        const user = await newUser.save(); //saves the new user
        const token = createToken(user._id)
        res.json({success: true, token})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"})
    }
}

export { loginUser, registerUser }