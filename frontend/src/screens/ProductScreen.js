import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Image, ListGroup, Button, ListGroupItem } from 'react-bootstrap'

import Rating from '../components/Rating'
import products from '../products'


function ProductScreen() {
    const { id } = useParams()
    const product = products.find((p) => p._id == id)
    // console.log(match.params.id)
    return (
        <div>
            <Row className='px-1 m-1 h-25'>

                <Col >
                    <ListGroup variant='flush' >
                        <ListGroupItem className='px-2 mx-2 col-bkg-color'>
                            <Row>
                                <Col><div className='div-inline-link'> <Link to={'/'}>Go Back </Link> </div>
                                </Col>

                            </Row>
                        </ListGroupItem>
                    </ListGroup>

                </Col>
                <Col>
                    <ListGroup variant='flush'>
                        
                        <ListGroup.Item className='p-3'>
                            <div className='mx-4  div-inline-link col-bkg-color'><h4> {product.brand}</h4></div>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col>
                    <ListGroup variant='flush'>
                        <ListGroupItem className='px-2 mx-2'  >
                            <div className='mx-3  col-bkg-color'><h4> {product.category}</h4></div>
                        </ListGroupItem>
                    </ListGroup></Col>

            </Row>
            <Row className='p-3 h-75'>
                <Col className='m-3'>
                    <Image className="w-100 h-100" src={product.image}></Image>
                </Col>
                <Col className='m-3'>

                    <ListGroup variant='flush' className='px-0'>
                    <ListGroupItem className='px-2 mx-2 border-left' >
                            <h4>{product.name}</h4>
                        </ListGroupItem>
                        <ListGroup.Item className='p-3'>
                            <h4>Price: ${product.price}</h4>
                        </ListGroup.Item>
                        <ListGroup.Item className='p-3'>
                            <Rating value={product.rating} text={product.numReviews} color={'#f92b1b'}></Rating>
                        </ListGroup.Item>



                        <ListGroup.Item>
                            <p>{product.description}</p>
                        </ListGroup.Item>

                    </ListGroup>
                </Col>
                <Col className='w-25'></Col>


            </Row>

        </div>
    )
}

export default ProductScreen