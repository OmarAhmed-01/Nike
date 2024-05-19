import userModel from '../models/UserModels.js'

//add to cart
const add_to_cart = async(req, res) => {
    try {
        //fetch userData from the database by using the user id from the request
        const userData = await userModel.findById(req.body.userId);
        //extract the user's cart data from the fetched data
        const cartData = await userData.cartData;
        //check for the item in the cart
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1; //if it isnt in the cart then make its count 1
        }
        else{
            cartData[req.body.itemId] += 1; //if it already exists then increment the counter by 1
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData}); //uodate the cartData in the database for the user
        res.json({success: true, message: "Item added to cart"});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error adding item to cart"});
    }
}

//remove cart items
const remove_from_cart = async(req, res) => {
    try {
        //fetch userData from the database by using the user id from the request
        const userData = await userModel.findById(req.body.userId);
        //fetch userData from the database by using the user id from the request
        const cartData = await userData.cartData;

        //check for the item in the cart
        if(cartData[req.body.itemId] > 0){
            cartData[req.body.itemId] -= 1; //if item counter is greater than 0 decrement it by 1 
        }

        await userModel.findByIdAndUpdate(req.body.userId, {cartData}) //uodate the cartData in the database for the user
        res.json({success: true, message: "Item removed from cart"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error deleted item from cart"})
    }
}

//get items in the cart
const get_cart_details = async(req, res) => {
    try {
        //fetch userData from the database by using the user id from the request
        const userData = await userModel.findById(req.body.userId);
        //fetch userData from the database by using the user id from the request
        const cartData = await userData.cartData;
        res.json({success: true, cartData}) //send a response with the cart data
    } catch (error) {
        console.log(error);
        res.json({success: false, meesage: "Error getting cart items"})
    }
}

export { add_to_cart, remove_from_cart, get_cart_details }