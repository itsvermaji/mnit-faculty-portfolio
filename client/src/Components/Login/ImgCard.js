
import React from 'react'
import { Card } from 'react-bootstrap'

const ImgCard = (props) => {
    return (
            <div className="imgCard">
            <Card style={{ width: '220px', height:'320px'}}>
                    
                    <Card.Body>
                        <Card.Img variant="top" src={props.imgSrc} />
                        {/* <Card.Text> {props.faculty.name} </Card.Text>
                        <Card.Text>{props.faculty.designation}</Card.Text>
                        <Card.Text>{props.faculty.contact_detail}</Card.Text> */}
                        <Card.Text> Balkrishan Sehra </Card.Text>
                        <Card.Text>Student at MNIT</Card.Text>
                        <Card.Text>Aurobindo Hostel, MNIT</Card.Text>
                    </Card.Body>
                </Card>
            </div> 
    )
}

export default ImgCard
