import React, { useContext, useEffect } from 'react'
import { Col, Container, Form } from 'react-bootstrap'
import CategoryBar from '../components/CategotyBar'
import ThemeBar from '../components/ThemeBar'
import ProductList from '../components/ProductList'
import { observer } from 'mobx-react-lite'
import { fetchCategories, fetchProducts, fetchThemes } from '../http/productAPI'
import { Context } from '../index'
import Pages from '../components/Pages'

const Shop = observer(() =>{
    const {product} = useContext(Context)

    useEffect(() => {
        fetchCategories().then(data => product.setCategories(data))
        fetchThemes().then(data => product.setThemes(data))
        fetchProducts(null, null, 1, 3).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchProducts(product.selectedCategory.id, product.selectedTheme.id, product.page, 3).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    },[product.page, product.selectedCategory, product.selectedTheme,])

    return(
        <Container>
            <Form className='mt-2 d-flex'>
                <Col md={3}>
                    <CategoryBar/>
                </Col>
                <Col md={9}>
                    <ThemeBar/>
                    <ProductList/>
                    <Pages/>
                </Col>
            </Form>
        </Container>
    )
})

export default Shop