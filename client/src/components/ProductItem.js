import React, { useContext } from 'react'
import { Col, Card } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import {useNavigate} from 'react-router-dom'
import { PRODUCT_ROUTE } from '../utils/consts'

const ProductItem = ({product}) =>{
    const navigate = useNavigate()

    return(
        <Col md={3} className={'mt-3'} onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + product.img}/>
                {/* <div>
                    <div>Футболка</div>
                </div> */}
                <div>{product.name}</div>
            </Card>
        </Col>
    )
}

export default ProductItem