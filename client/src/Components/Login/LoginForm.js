import React from 'react'
import ImgCard from './ImgCard'
import LoginDetails from "./LoginDetails"
import {Container, Row, Col} from 'react-bootstrap'
const LoginForm = () => {

    return (
        
        <Container style={{margin:"250px"}}>
            <Row className="justify-content-md-center">        
                <Col xs lg="4">
                    <ImgCard/>
                </Col>
                <Col xs lg="4" style={{padding:"30px"}}>
                    <LoginDetails/>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginForm
