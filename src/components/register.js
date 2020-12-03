import React, {useState} from 'react';
import axios from 'axios';

import {Form, Col, Button, InputGroup } from 'react-bootstrap';

export function Register(props) {
    const userFeilds = {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        adress: "",
    };

    const [user, setUser] = useState(userFeilds);
    const [posted, setPosted] = useState("not-posted-book");

    const handleChange = async(event) => {
        // setBook({...book, [event.target.name]: event.target.value});
        console.log([event.target.name] + " : " + [event.target.value]);
        setUser({...user, [event.target.name]: event.target.value});
      //  console.log("USER: " + user);
    }

    const submit = () => {
        console.log(user);
    }
    const postUser = async() => {
        console.log("poseted");
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
                            <Form.Control size="lg" type="text" name="firstName" onChange={handleChange} placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control size="lg" type="text" name="lastName" onChange={handleChange} placeholder="Last name" />
                        </Col>
                    </Form.Row>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="lg" lg={2}>
                                Email : 
                            </Form.Label>
                            <Col>
                                <Form.Control size="lg" type="email" name="email" onChange={handleChange} placeholder="Email" />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="lg" lg={2}>
                                Username :
                            </Form.Label>
                            <Col>
                                <InputGroup  className="mb-2">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control size="lg" type="text" name="username" onChange={handleChange} placeholder="Username" />
                                </InputGroup>
                                
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="lg" lg={2}>
                                Adress : 
                            </Form.Label>
                            <Col>
                                <Form.Control size="lg" as="textarea" rows={5} type="text" name="adress" onChange={handleChange} placeholder="What is your adress?" />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="lg" lg={2}>
                                Password : 
                            </Form.Label>
                            <Col>
                                <Form.Control size="lg" rows={5} type="password" name="password" onChange={handleChange} placeholder="Password" />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Button size="lg" onClick={submit} > Add Book! </Button>
                </Form>
            </div>
        </div>
    );

} 