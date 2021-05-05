import express from 'express'

import dotenv from "dotenv"

import connectDB from "./config/db.js"

import productRoutes from "./routes/productRoutes.js"
import { notFound, errorHandler } from './middleware/errorhandler.js'

dotenv.config();

connectDB();

const app = express(); 

const PORT= process.env.PORT || 5000
const mode = process.env.NODE_ENV




app.use("/api/products" , productRoutes)
app.use(notFound)
app.use(errorHandler)


app.listen(PORT , console.log(`Server running in port ${PORT} in ${mode} mode`));

app.get('/' , (req , res)=>{
 res.send("Api is Running")
})
