import express from 'express'
import products from "./data/products.js"
import dotenv from "dotenv"

import connectDB from "./config/db.js"

dotenv.config();

connectDB();

const app = express(); 

const PORT= process.env.PORT || 5000
const mode = process.env.NODE_ENV

app.listen(PORT , console.log(`Server running in port ${PORT} in ${mode} mode`));

app.get('/' , (req , res)=>{
 res.send("Api is Running")
})

app.get('/api/products' , (req , res)=>{
 res.json(products)
})

app.get('/api/products/:id' , (req , res)=>{
 const product = products.find((p)=> p._id===req.params.id)
 res.json(product)
})