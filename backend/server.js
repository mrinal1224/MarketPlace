import express from 'express'

import dotenv from "dotenv"

import connectDB from "./config/db.js"

import productRoutes from "./routes/productRoutes.js"

dotenv.config();

connectDB();

const app = express(); 

const PORT= process.env.PORT || 5000
const mode = process.env.NODE_ENV

app.listen(PORT , console.log(`Server running in port ${PORT} in ${mode} mode`));

app.get('/' , (req , res)=>{
 res.send("Api is Running")
})


app.use("/api/products" , productRoutes)

