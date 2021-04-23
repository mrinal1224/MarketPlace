import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from "./Rating"

const Product = ({product}) => {
    return (
     <Card className="my-3 p-3 rounded">
        <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top'/>
        </a>
        <Card.Body>
             <a href={`/product/${product._id}`}>
                <Card.Title as="h6">
                    <strong>{product.name}</strong>
                </Card.Title>
             </a>
            

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
