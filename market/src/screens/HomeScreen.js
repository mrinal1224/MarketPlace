import React, { useEffect } from 'react'
import {useDispatch , useSelector} from "react-redux"
import { Col, Row } from 'react-bootstrap'
import Product from "../components/Product"
import Loader from "../components/Loader"
import Message from "../components/Message"
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {

    const dispatch = useDispatch();

    const productList= useSelector(state => state.productList)
    const {loading , error , products} = productList

   

   useEffect(()=>{
      
     dispatch(listProducts())

   },[dispatch])


    return (
        <>
        

        <h1>Latest Products</h1>
        {loading ? (<Loader/>) : error? (<Message>{error}</Message>) :  (
            <Row>
        

            {products.map(product=>(
                <Col key={product._id} sm={12} md={4} lg={3} xl={3}>
                <h3>
                    <Product product={product}/>
                </h3>

                </Col>
            ))}


            
        </Row>
            
      

        )}
          </>
        
    )
}

export default HomeScreen
