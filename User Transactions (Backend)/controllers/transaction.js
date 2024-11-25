import transactionModel from "../models/transaction.js"

export const createTransactions = async (req, res) => {
    try {
        const { id, counterparty, date, status, amount } = req.body

        const transaction = await transactionModel.create({
            id, counterparty, date, status, amount
        })

        res.status(200).json({
            success: true,
            message: "Transaction created successfully!!",
            transaction: transaction
        })

    } catch (error) {
        console.log(error)
    }
}

export const allTransactions = async (req, res) => {
    try {
        const ans = await transactionModel.find()

        res.status(200).json({
            success: true,
            message: "Transaction fethced successfully!!",
            transaction: ans
        })
    } catch (error) {
        console.log(error)
    }
}