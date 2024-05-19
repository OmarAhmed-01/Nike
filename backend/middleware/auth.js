import jwt from 'jsonwebtoken'; //Import the jsonwebtoken library for handling JWTs (JSON Web Tokens)

const authMiddleWare = async(req, res, next) => {
    const { token } = req.headers; //Extract the 'token' from the request headers

    //If no token is provided, send a response indicating lack of authorization
    if(!token){
        res.json({success: false, message: "No Authorization"})
    }
    try {
        //Verify the token using the secret key stored in environment variables
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        //If verification is successful, add the user ID from the decoded token to the request body
        req.body.userId = token_decode.id;
        //Call the next middleware function in the stack
        next();
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Authentication Error"})
    }
}

export default authMiddleWare;