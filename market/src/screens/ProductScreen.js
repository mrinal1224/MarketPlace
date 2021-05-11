import React, { useState , useEffect } from 'react'
import {useSelector , useDispatch} from "react-redux"
import{Link} from "react-router-dom"
import {Row, Col,Image , ListGroup , Card , Button, ListGroupItem, FormControl} from "react-bootstrap"
import Rating from "../components/Rating"
import {listProductDetail} from "../actions/productActions"
import Loader from "../components/Loader"
import Message from "../components/Message"



const ProductScreen = ({history , match}) => {

    const [qty, setQty] = useState(1)

    const dispatch = useDispatch();

    const productDetail = useSelector(state => state.productDetails)
    const {loading , error , product} = productDetail
   


useEffect(()=>{
    
   dispatch(listProductDetail(match.params.id))


},[match.params.id , dispatch])

    const addToCartHandler =()=>{
          history.push(`/cart/${match.params.id}?qty=${qty}`)
}

 




    
    return (
        <>
        
           <Link className="btn btn-light my-3" to='/'>Go to Home</Link>

           {loading ? (<Loader/>) : error? (<Message>{error}</Message>) :  (
           

           <Row>
               <Col md={6}>

               <Image src={product.image} alt={product.name} fluid/>


               </Col>

               <Col md={3}>

                   <ListGroup variant='flush'>
                       <ListGroup.Item>
                           <h4>{product.name}</h4>
                       </ListGroup.Item>
                       <ListGroup.Item>
                           <Rating value={product.rating} text={` ${product.numReviews} reviews`}/>
                       </ListGroup.Item>
                       <ListGroup.Item>
                           <strong>Rs {product.price}</strong>
                       </ListGroup.Item>
                       <ListGroup.Item>
                           <p>{product.description}</p>
                       </ListGroup.Item>
                   </ListGroup>

               </Col>

               <Col md={3}>

                   <Card>
                       <ListGroup variant='flush"'>
                           <ListGroup.Item>

                               <Row>
                                   <Col>Price:</Col>
                                   <Col><strong>Rs.{product.price}</strong></Col>
                               </Row>

                           </ListGroup.Item>

                           <ListGroup.Item>

                               <Row>
                                   <Col>Status:</Col>
                                   <Col>{product.countInStock>0 ? <p className="text-success">In Stock</p> : <p className="text-danger">Out of Stock</p>} </Col>
                               </Row>

                           </ListGroup.Item>

                           {product.countInStock > 0 &&(
                               <ListGroupItem>
                               <Row>
                                   <Col>Qty</Col>
                                   <Col>
                                   <FormControl as="select" value={qty} onChange={(e)=>{
                                       setQty(e.target.value)
                                   }} >
                                       {
                                       [...Array(product.countInStock).keys()].map(x=>(
                                           <option key={x+1} value={x+1}>
                                              {x+1}
                                           </option>
                                       ))
                                          }                 

                                   </FormControl>
                                   </Col>
                               </Row>
                               </ListGroupItem>
                           )}



                           <ListGroup.Item>
                               <Button className="btn-block" type="button" disabled={product.countInStock===0} onClick={addToCartHandler}>
                                   Add to Cart
                               </Button>
                           </ListGroup.Item>
                       </ListGroup>
                   </Card>
                
               </Col>
           </Row>)
         }          
        </>
    )
}

export default ProductScreen
