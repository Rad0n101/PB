import React, { useContext, useState } from 'react'
import {Container, Form, Card, Button} from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { login, registration } from '../http/userAPI'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'

const Auth = observer(() =>{
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data
            if(isLogin){
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }

        user.setUser(data)
        user.setIsAuth(true)
        navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return(
        <Container 
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 350}} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-4'
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-2'
                        placeholder='Пароль'
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Form className='d-flex justify-content-between mt-3'>
                        {isLogin ?
                        <div>
                            <NavLink to={REGISTRATION_ROUTE} style={{color: "#0d6efd"}}>Регистрация</NavLink>
                        </div>
                        :
                        <div>
                            <NavLink to={LOGIN_ROUTE} style={{color: "#0d6efd"}}>Вход</NavLink>
                        </div>
                    }
                        <Button size="sm"
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Form>
                </Form>
            </Card>
        </Container>
    )
})

export default Auth
