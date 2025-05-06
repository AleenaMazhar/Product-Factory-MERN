// const express = require('express')
import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/product.route.js"

dotenv.config();
const app = express();

app.get("/", (req,res) => {
    res.send("Server is ready")
})

const PORT = process.env.PORT

app.use(express.json());

app.use("/api/products",productRoutes)


app.listen(PORT, ()=> {
    connectDB()
    console.log("Server started")
})

// ixqQ1ii6rdKRzPRZ