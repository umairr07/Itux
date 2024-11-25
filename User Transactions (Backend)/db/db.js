import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb://localhost:27017/user-transactions")
        console.log("DB connected successfully!!")
    } catch (error) {
        console.log(error)
    }
}