import React from 'react'
import ImgCard from './ImgCard'
import LoginDetails from "./LoginDetails"
import {Container, Row, Col} from 'react-bootstrap'
const LoginForm = (props) => {
    let imgLink="https://image.shutterstock.com/z/stock-vector-male-avatar-profile-picture-vector-149083895.jpg";
        
    return (
        <>
        <Container className="container" >
            <Row className="justify-content-md-center">        
                <Col xs lg="4">
                    <ImgCard imgSrc={imgLink}/>
                </Col>
                <Col xs lg="4" id="loginPlaceHolder">
                    <LoginDetails email={props.email} password={props.password} />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default LoginForm
