import mongoose from "mongoose";

//use mongoose framework to connect to database and if successful console log(database connected)
export const Connect_Database = async () => {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => console.log("Database Connected"))
}