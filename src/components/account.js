import React, {useEffect, useState, useContext} from 'react';
import { UserContext } from '../contexts/context';
import {Form, Col, Button, InputGroup } from 'react-bootstrap';
import  { Redirect } from 'react-router-dom';
import Axios from 'axios';
export function Account () { 

    const { auth, setAuth } =  useContext(UserContext);
    const [curbod, setCurbod] = useState();
    const [user, setUser] = useState();

    const handleChange = async(event) => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const logout = async(event) => {
        setAuth();
        <Redirect to='/login'  />
    }
    const deleteAcount = async(event) => {
        const url = 'http://localhost:9999/api/v1/users/' + (auth.ID).toString();
        Axios({
            method: 'delete',
            url: 'url',
            headers : {
                "Authorization": "Basic " + btoa(auth.username + ":" + auth.password),
            }
        }).then(res => {
            console.log(res);
            alert("Succesfully deleted account ");
        }).catch(e => {
            console.log(e);
            alert("Failed to delete account");
        })
        alert("Succesfully deleted account ");
        setAuth();

    }
    
    // const logout =
    return (
        <div>
            <div>
                {auth ? (
                    <h1 className="header"> Welcome {auth.firstName}</h1>
                ) : (
                    <div>
                    <h1 className="header" > You need to log in</h1>
                    <Redirect to='/login'  />
                    </div>
                )}
                
            </div>
                {curbod ? (
                    <div> 
                        <div className="Book-Form">
                            <h1> Update yoru feilds </h1>
                <Form >
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="lg" lg={2}> Name : </Form.Label>
                            <Col>
                                <Form.Control size="lg" type="text" name="firstName" onChange={handleChange} value={auth.firstName} />
                            </Col>
                            <Col>
                                <Form.Control size="lg" type="text" name="lastName" onChange={handleChange} value={auth.lastName} />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="lg" lg={2}>
                                Email : 
                            </Form.Label>
                            <Col>
                                <Form.Control size="lg" type="email" name="email" onChange={handleChange} value={auth.email} />
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
                                    <Form.Control size="lg" type="text" name="username" onChange={handleChange} value={auth.username}/>
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
                                <Form.Control size="lg" as="textarea" rows={5} type="text" name="adress" onChange={handleChange} value={auth.adress} />
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
                    <Button size="lg"  > Add Book! </Button>
                    <Button size="lg" onClick={() => setCurbod()}> Cancel </Button>
                </Form>
            </div>
                    </div>
                    
                ) : (
                    <div className="Accountbody">

                    <Button className="logout" onClick={ logout}> logout </Button>
                    <Button className="logout" onClick={() => {
                        setCurbod(true);
                    }}> Update  user </Button>
                    <Button onClick={deleteAcount}> Delete Account </Button>
                    </ div>
                )}

        </div>
    )
}