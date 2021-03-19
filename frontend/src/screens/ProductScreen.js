import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from "react-router-dom"
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap"
import {listProductDetails} from "../actions/productActions"
import Loader from '../components/Loader'
import Message from '../components/Message'
import Rating from "../components/Rating"

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  const {loading, error, product} = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])
  
  // Add to Cart
  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  const {name, image, rating, numReviews, price, description, countInStock} = product

  return (
    <>
      <Link className="btn btn-primary my-3" to="/"><i className="fas fa-long-arrow-alt-left"></i>  Go Back</Link>
      {
        loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : <Row>
        <Col md={6}>
          <Image src={image} alt={name} fluid/>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>{name}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={rating && rating} text={`${numReviews} reviews`}/>
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${price}
            </ListGroup.Item>
            <ListGroup.Item>
              In stock: {countInStock} Items
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
              {countInStock > 0 && <ListGroup.Item>
                <Row>
                  <Col>
                    Qty: 
                  </Col>
                  <Col>
                    <Form.Control as="select" value={qty} onChange={(e) => setQty(e.target.value)}>
                      {
                        [...Array(countInStock).keys()].map(x => (
                        <option key={x + 1} value={x+1}>{x + 1}</option>
                      ))
                      }
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>}
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
                <Button onClick={addToCartHandler} disabled={countInStock === 0} className="btn btn-block btn-primary" type="button">
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
    </Row>
      }
    </>
  )
}

export default ProductScreen
