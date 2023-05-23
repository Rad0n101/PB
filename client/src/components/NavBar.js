import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import React, { useContext } from "react";
import { Context } from "../index";
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, CART_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
        <NavLink style={{color:'white', textDecoration:'none', fontWeight:'bold'}} to={SHOP_ROUTE}>ПРИНТ БЮРО</NavLink>
            {user.isAuth ?
                <Nav className="ml-auto">
                    {/* <p style={{color: 'white'}}></p>   */}
                    {/* <Button onClick={() => navigate(CART_ROUTE)} variant="outline-primary" size="sm">Корзина</Button> */}
                    <Button onClick={() => navigate(ADMIN_ROUTE)} style={{marginLeft: '5px'}} variant="outline-warning" size="sm">Админ панель</Button>
                    <Button onClick={() => logOut()} style={{marginLeft: '5px'}} variant="outline-danger" size="sm">Выйти</Button>
                </Nav>
                :
                <Nav className="ml-auto">
                    <Button variant="outline-danger" size="sm" onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                </Nav>
            }       
        </Container>
      </Navbar>
    )
})

export default NavBar