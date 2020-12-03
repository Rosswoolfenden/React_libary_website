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

    const submit = async(event) => {
        axios({
            method: 'post',
            url: 'http://localhost:9999/api/v1/users/',
            data: user,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8', 
                "Access-Control-Allow-Origin": "*"
            }
        }).then(res => {
            console.log(res.data);
            alert("Succesfully Logged in!");
            
        }).catch((e) => {
            console.log(e.response.status);
            if(e.response.status == 409) {
                alert("Username already exists, please choose a new one");
            } else {
                alert("Internal server errror, try again later");
            }
        });
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
                            <Form.Control id="inlineFormInputGroupUsername" name="username" onChange={handleChange} placeholder="Username" />
                    </InputGroup>
                    </Col>
                     <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputName" srOnly> Name </Form.Label>
                        <Form.Control id="inlineFormInputName" type="password"  name="password" onChange={handleChange} placeholder="Password" />
                    </Col>
                    <Col xs="auto" className="my-1">
                    <Button type="submit" onClick={submit} >Submit</Button>
                    </Col>
                    <Col xs="auto" className="my-1">
                    <Link to="/register">   Register </Link>
                    </Col>
                    
                </Form.Row>
                
                </Form>
                
            </div>
        </div>
    )

}
