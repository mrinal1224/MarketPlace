import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from "../components/Product"
import axios from 'axios'

const HomeScreen = () => {

   const [products , setProducts] =  useState([]);

   useEffect(()=>{
       const fetchProducts = async ()=>{
           const {data} = await axios.get('/api/products')

           setProducts(data)


       }

       fetchProducts();
     

   },[])
    return (
        <>

        <h1>Latest Products</h1>
        <Row>
        

            {products.map(product=>(
                <Col key={product._id} sm={12} md={4} lg={3} xl={3}>
                <h3>
                    <Product product={product}/>
                </h3>

                </Col>
            ))}


            
        </Row>
            
        </>
    )
}

export default HomeScreen
