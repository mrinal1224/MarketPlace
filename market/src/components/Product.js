import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from "./Rating"
import {Link} from "react-router-dom"

const Product = ({product}) => {
    return (
     <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top'/>
        </Link>
        <Card.Body>
             <Link to={`/product/${product._id}`}>
                <Card.Title as="h6">
                    <strong>{product.name}</strong>
                </Card.Title>
             </Link>
            

             <Card.Text as="h6">
                 <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
             </Card.Text>

              <Card.Text as="h6" className="text-success">
                  <b> <em>Rs.{product.price}</em> </b>
             </Card.Text>

               

        </Card.Body>

     </Card>
    )
}

export default Product;
