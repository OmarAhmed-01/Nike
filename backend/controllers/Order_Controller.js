import userModel from "../models/UserModels.js";
import orderModel from "../models/OrderModels.js";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//place order from frontend
const placeOrder = async (req, res) => {

    const frontend_url = "http://localhost:5173";

    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        });
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, {cartData: {}});

        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.label,
                },
                unit_amount: item.price*100
            },
            quantity: item.quantity
        }));

        line_items.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name: "Delivery Charges"
                },
                unit_amount: 2*100
            },
            quantity: 1
        });

        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: "payment",
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:  `${frontend_url}/verify?false=true&orderId=${newOrder._id}`
        });

        res.json({success: true, session_url: session.url})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error in payment"});
    }
};

const verifyOrder  = async (req, res) => {
    const { orderId, success } = req.body;
    try {
        if(success === "true"){
            await orderModel.findByIdAndUpdate(orderId, {payment: true});
            res.json({success: true, message: "Payment Successful"});
        }
        else{
            await orderModel.findbyIdAndDelete(orderId);
            res.json({success: false, message: "Error in Payment"});
        }
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error in Verifying Order"});
    }
}

export { placeOrder, verifyOrder };
