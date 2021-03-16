import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from "./Rating"

const Product = ({ product }) => {
  const {name, _id, image, rating, numReviews, price} = product

  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/products/${_id}`}>
        <Card.Img src={image} variant="top"/>
      </a>

      <Card.Body>
        <a href={`/products/${_id}`}>
          <Card.Title as="div"><strong>{name}</strong></Card.Title>
        </a>
      </Card.Body>
      <Card.Text as="div">
        <Rating value={rating} text={`${numReviews} reviews`} />
      </Card.Text>
      <Card.Text as="h3" className="text-center py-2">
        ${price}
      </Card.Text>
    </Card>
  )
}

export default Product
