import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    counterparty: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        required: true,
        unique: true
    },
    amount: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true })

const transactionModel = mongoose.model("Transaction", transactionSchema)

export default transactionModel