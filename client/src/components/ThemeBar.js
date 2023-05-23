import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Col, Container, Form } from 'react-bootstrap'
import { Context } from '../index'
import ListGroup from 'react-bootstrap/ListGroup';

const ThemeBar = observer(() =>{
    const {product} = useContext(Context)
    return(
        <Form className='d-flex'>
            {product.themes.map(theme =>
                <Card
                style={{cursor: 'pointer', marginRight: '10px'}}
                key={theme.id}
                className='p-3'
                onClick={() => product.setSelectedTheme(theme)}
                border={theme.id === product.selectedTheme.id ? 'danger' : 'light'}
                >
                    {theme.name}
                </Card>
            )}
        </Form>
    )
})

export default ThemeBar