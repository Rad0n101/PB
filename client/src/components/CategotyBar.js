import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Col, Container, Form } from 'react-bootstrap'
import { Context } from '../index'
import ListGroup from 'react-bootstrap/ListGroup';

const CategoryBar = observer(() =>{
    const {product} = useContext(Context)
    return(
        <ListGroup style={{marginRight: '10px'}}>
            {product.categories.map(category => 
                <ListGroup.Item 
                    style={{cursor: 'pointer'}}
                    active={category.id === product.selectedCategory.id}
                    onClick={() => product.setSelectedCategory(category)}
                    key={category.id}
                >
                    {category.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    )
})

export default CategoryBar