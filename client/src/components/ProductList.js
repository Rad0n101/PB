import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Col, Container, Form } from 'react-bootstrap'
import { Context } from '../index'
import ListGroup from 'react-bootstrap/ListGroup';
import ProductItem from './ProductItem';

const ProductList = observer(() =>{
    const {product} = useContext(Context)
    return(
        <Form className='d-flex' style={{flexWrap: 'wrap'}}>
            {product.products.map(product =>
                <ProductItem key={product.id} product={product}/>
            )}
        </Form>
    )
})

export default ProductList