import React, { useState } from 'react'
import {Container, Button} from 'react-bootstrap'
import CreateCategory from '../components/modals/CreateCategory'
import CreateProduct from '../components/modals/CreateProduct'
import CreateTheme from '../components/modals/CreateTheme'

const Admin = () =>{
    const [categotyVisible, setCategoryVisible] = useState(false)
    const [themeVisible, setThemeVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)

    return(
        <Container className='d-flex flex-column'>
            <Button 
                variant="warning" 
                className='mt-2'
                onClick={() => setCategoryVisible(true)}
                >
                    Добавить категорию
            </Button>
            <Button 
                variant="warning" 
                className='mt-2'
                onClick={() => setThemeVisible(true)}
                >
                    Добавить тему
            </Button>
            <Button 
                variant="warning" 
                className='mt-2'
                onClick={() => setProductVisible(true)}
                >
                    Добавить товар
            </Button>

            <CreateCategory show={categotyVisible} onHide={() => setCategoryVisible(false)}/>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
            <CreateTheme show={themeVisible} onHide={() => setThemeVisible(false)}/>
        </Container>
    )
}

export default Admin