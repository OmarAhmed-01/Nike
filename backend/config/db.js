import mongoose from "mongoose";

//use mongoose framework to connect to database and if successful console log(database connected)
export const Connect_Database = async () => {
    await mongoose.connect('mongodb+srv://omarahmedm:yRp6hkQcFGNHg24m@cluster0.8wximot.mongodb.net/e-commerce').then(() => console.log("Database Connected"))
}