import React, {useState} from 'react';
import axios from 'axios';

import {Form, Col, Button} from 'react-bootstrap';

export function Register(props) {
    const userFeilds = {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        role: "basic",
        

    };

    const [user, setUser] = useState(userFeilds);
    const [posted, setPosted] = useState("not-posted-book");

    const handleChange = async(event) => {
        // setBook({...book, [event.target.name]: event.target.value});
    }

    const submit = () => {
        console.log("submit ");
    }

    return (
        <div >
            <div className="App">
                <h1>Register User</h1>
            </div>
            <div className={posted}>
                <h2> Succsefully added new user </h2>
            </div>
            <div className="Book-Form">
                <Form >
                    <Form.Group>
                        <Form.Row>
                        <Form.Label column="lg" lg={2}> Name : </Form.Label>
                        <Col>
                            <Form.Control size="lg" type="text" name="fn" onChange={handleChange} placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control size="lg" type="text" name="sn" onChange={handleChange} placeholder="Last name" />
                        </Col>
                    </Form.Row>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="lg" lg={2}>
                                Email : 
                            </Form.Label>
                            <Col>
                                <Form.Control size="lg" type="text" name="email" onChange={handleChange} placeholder="Email" />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="lg" lg={2}>
                                Username :
                            </Form.Label>
                            <Col>
                                <Form.Control size="lg" type="text" name="username" onChange={handleChange} placeholder="Usernmae" />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="lg" lg={2}>
                                Adress : 
                            </Form.Label>
                            <Col>
                                <Form.Control size="lg" as="textarea" rows={5} type="text" name="about" onChange={handleChange} placeholder="What is your adress?" />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Button size="lg" onClick={submit} > Add Book! </Button>
                </Form>
            </div>
        </div>
    );

} 