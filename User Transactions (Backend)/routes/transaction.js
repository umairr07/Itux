import express from "express";
import { allTransactions, createTransactions } from "../controllers/transaction.js";

const router = express.Router()

router.post("/create", createTransactions)
router.get("/all", allTransactions)

export default router;