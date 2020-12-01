import React from 'react';
//import axios from 'axios';
//import { Link } from 'react-router-dom';
import {Form, Col, Button} from 'react-bootstrap';

export function AddBooks(props) {
    return (
        <div >
            <div className="App">
                <h1>Add Books</h1>
            </div>
            <div className="Book-Form">
                <Form>
                <Form.Group>
                    <Form.Row>
                        <Form.Label column="lg" lg={2}>
                            Title : 
                        </Form.Label>
                        <Col>
                            <Form.Control size="lg" type="text" placeholder="Book Title" />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        <Form.Label column="lg" lg={2}>
                            Author
                        </Form.Label>
                        <Col>
                            <Form.Control size="lg" type="text" placeholder="Book Author" />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        <Form.Label column="lg" lg={2}>
                            ISBN
                        </Form.Label>
                        <Col>
                            <Form.Control size="lg" type="number" placeholder="Book ISBN " />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        <Form.Label column="lg" lg={2}>
                            About : 
                        </Form.Label>
                        <Col>
                            <Form.Control size="lg" as="textarea" rows={5} type="text" placeholder="Tell us about the book?" />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Button> Add Book! </Button>
                </Form>
            </div>
        </div>

    );
} 
