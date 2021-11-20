
import React from 'react'
import { Card } from 'react-bootstrap'

const ImgCard = () => {
    return (
            <div className="float-child">
            <Card style={{ width: '200px', height:'320px'}}>
                    
                    <Card.Body>
                        <Card.Img variant="top" src="https://image.shutterstock.com/z/stock-vector-male-avatar-profile-picture-vector-149083895.jpg" />
                        <Card.Text> Balkrishan Sehra </Card.Text>
                        <Card.Text>Student at MNIT</Card.Text>
                        <Card.Text>Working on this project</Card.Text>
                    </Card.Body>
                </Card>
            </div> 
    )
}

export default ImgCard
