import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({product}) => {
    return (
     <Card className="my-3 p-3 rounded">
        <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top'/>
        </a>
        <Card.Body>
             <a href={`/product/${product._id}`}>
                <Card.Title as="h5">
                    <strong>{product.name}</strong>
                </Card.Title>
             </a>
             <Card.Text as="h5" className="text-success">
                  <b> <em>Rs.{product.price}</em> </b>
             </Card.Text>

             <Card.Text as="div">
                 <div className="h6 text-warning">
                     {product.rating} from {product.numReviews} reviews
                     
                 </div>

             </Card.Text>

               

        </Card.Body>

     </Card>
    )
}

export default Product;
