import userModel from '../models/UserModels.js'

//add to favourite
const add_to_favourite = async(req, res) => {
    try {
        const userData = await userModel.findById(req.body.userId)
        const favData  = userData.favData;
        if(!favData[req.body.itemId]){
            favData[req.body.itemId] = 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {favData})
        res.json({success: true, message: "Product added to favourites"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error adding product to favourites"});
    }
}

//remove from favourite
const remove_from_favourite = async(req, res) => {
    try {
        const userData = await userModel.findById(req.body.userId);
        const favData  = userData.favData;

        if(favData[req.body.itemId] > 0){
            favData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {favData});
        res.json({success: true, message: "Product removed from favourites"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error removing product from favourites"})
    }
}

//get favourite items 
const get_favourite = async(req, res) => {
    try {
        const userData = await userModel.findById(req.body.userId);
        const favData = userData.favData;

        res.json({success: true, favData});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error getting favourite products"})
    }
}

export { add_to_favourite, remove_from_favourite, get_favourite }