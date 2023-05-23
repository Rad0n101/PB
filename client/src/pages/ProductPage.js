import React, { useEffect, useState } from 'react'
import {Col, Container, Image, Form, Row, Card, Button} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { fetchOneProducts } from '../http/productAPI'

const ProductPage = () =>{
    const [product, setProduct] = useState({img: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneProducts(id).then(data => setProduct(data))
    }, [])

    return(
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + product.img}/>
                </Col>
                <Col md={4}>
                    <Form>
                        <h2>{product.name}</h2>
                    </Form>
                </Col>
                <Col md={4}>
                    <Card className='d-flex flex-column align-items-center justify-content-around'
                        style={{width: 300, height: 300}}>
                        <h3>{product.price}&#8381;</h3>
                        {/* <Button>Добавить в корзину</Button> */}
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductPage