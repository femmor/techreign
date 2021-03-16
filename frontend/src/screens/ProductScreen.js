import React from 'react'
import {Link} from "react-router-dom"
import {useParams} from "react-router-dom"
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap"
import Rating from "../components/Rating"
import products from "../products"

const ProductScreen = () => {
  const params = useParams()
  const product = products.find(product => product._id === params.id)
  const {name, image, rating, numReviews, price, description, countInStock} = product


  return (
    <>
      <Link className="btn btn-primary my-3" to="/"><i class="fas fa-long-arrow-alt-left"></i>  Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={image} alt={name} fluid/>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>{name}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={rating} text={`${numReviews} reviews`}/>
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price: 
                  </Col>
                  <Col>
                    <strong>${price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Status: 
                  </Col>
                  <Col className={product.countInStock === 0 && 'text-danger'}>
                    {product.countInStock > 0 ? "In stock" : "Out of stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button disabled={countInStock === 0} className="btn btn-block btn-primary" type="button">
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
    </Row>
    </>
  )
}

export default ProductScreen
