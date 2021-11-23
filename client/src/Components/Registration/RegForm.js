import React, {useState} from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
const Registration = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gsLink, setGsLink] = useState("")

    let onClick = (e_mail,pass, link) => {
        console.log(e_mail);
        console.log(pass);
        console.log(link);
    }
    return (
        <Container className="container" >
            <Row className="justify-content-md-center">
                <Col xs={6} md={4}> 
                    <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Mnit_logo.png/220px-Mnit_logo.png" roundedCircle></Image>
                </Col>
                <Col xs lg="4" id="RegistrationBox">
                    <form>
                        <div class="form-outline mb-4">
                            <input type="email" value={email} id="faculty-email-reg" class="form-control" onChange={(e)=> setEmail(e.target.value)} />
                            <label class="form-label" for="faculty-email-reg">Email address</label>
                            
                        </div>
                        <div class="form-outline mb-4">
                            <input type="password" value={password} id="faculty-password-reg" class="form-control" onChange={(e)=>setPassword(e.target.value)} />
                            <label class="form-label" for="faculty-password-reg">Password</label>
                        </div>
                        <div class="form-outline mb-4">
                            <input type="text" value={gsLink} id="g-scholar-link" class="form-control" onChange={(e)=>setGsLink(e.target.value)}/>
                            <label class="form-label" for="faculty-password">Google Scholar Link</label>
                        </div>

                    <button type="submit" class="btn btn-primary btn-block mb-4" onClick={onClick(email,password,gsLink)}>Register</button>

                </form>
                    
                </Col>
            </Row>
        </Container>



            

    )
}

export default Registration;