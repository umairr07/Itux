import express from "express";
import { connectToDB } from "./db/db.js";
import userTransactionRoutes from "./routes/transaction.js"

const app = express()
const PORT = 3000

app.use(express.json())

app.use("/api/v1/user", userTransactionRoutes)

app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`)
    connectToDB()
})