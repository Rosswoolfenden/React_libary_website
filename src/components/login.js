import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {Form, Col, Button, InputGroup } from 'react-bootstrap';

const userFeilds = {
    username: "",
    password: ""
};

export function Login(props){

    

    const [user, setUser] = useState(userFeilds);

    const handleChange = async(event) => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    return (
        <div >
            <div>
            <Form>
                <Form.Row className="align-items-center">
                   

                    <Col sm={3} className="my-1">
                    <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>Username</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text>@</InputGroup.Text>
                        </InputGroup.Prepend>
                            <Form.Control id="inlineFormInputGroupUsername" placeholder="Username" />
                    </InputGroup>
                    </Col>
                     <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputName" type="password" srOnly> Name </Form.Label>
                        <Form.Control id="inlineFormInputName" placeholder="Password" />
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Form.Check type="checkbox" id="autoSizingCheck2" label="Remember me" />
                    </Col>
                    <Col xs="auto" className="my-1">
                    <Button type="submit">Submit</Button>
                    </Col>
                    <Link to="/register">   Register </Link>
                </Form.Row>
                
                </Form>
                
            </div>
        </div>
    )

}
