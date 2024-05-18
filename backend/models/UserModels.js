import mongoose from 'mongoose'; //import mongoose package from mongoose library

//defining the user Schema for the user collection in MongoDB
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    cartData: {type: Object, default:{}}
},{minimize:false});

//Create a user model if it doesnt exist, otherwise use the model "user"
const userModel  = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;