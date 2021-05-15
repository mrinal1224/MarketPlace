import asyncHandler from "express-async-handler"
import  Product from "../models/productModel"

const getProducts = asyncHandler(async (req , res) =>{

    const products = await Product.find({})
    res.json(products)

})


const getProductsById = asyncHandler(async (req , res)=>{
if(product){
     res.json(product)
} else{
    res.status(404).json({message:"product not found"})
}
})


export {
    getProducts,
    getProductsById
}