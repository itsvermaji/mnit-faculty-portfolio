
import React from 'react'
import { Card } from 'react-bootstrap'

const ImgCard = (props) => {
    return (
            <div className="imgCard">
            <Card style={{ width: '220px', height:'320px'}}>
                    
                    <Card.Body>
                        <Card.Img variant="top" src={props.imgSrc} />
                        <Card.Text> Balkrishan Sehra </Card.Text>
                        <Card.Text>Student at MNIT</Card.Text>
                        <Card.Text>Working on this project</Card.Text>
                    </Card.Body>
                </Card>
            </div> 
    )
}

export default ImgCard
