import React, {useState} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';

import {Form, Col, Button} from 'react-bootstrap';

export function AddBooks(props) {
    const bookFeilds = {
        title: "",
        isbn: null,
        genre: null,
        pubData: null,
        ownerId: null,
        about: null,
        imageURL: null,
        rating: null
    };

    const [book, setBook] = useState(bookFeilds);
    const [posted, setPosted] = useState("not-posted-book");

    const handleChange = async(event) => {
      setBook({...book, [event.target.name]: event.target.value});
    }
    const submit = () => {
        
    }
    return (
        <div >
            <div className="App">
                <h1>Add Books</h1>
            </div>
            <div className={posted}>
                <h2> Succesfully added Book!</h2>
            </div>
            <div className="Book-Form">
                <Form onSubmit={submit}>
                <Form.Group>
                    <Form.Row>
                        <Form.Label column="lg" lg={2}>
                            Title : 
                        </Form.Label>
                        <Col>
                            <Form.Control size="lg" type="text" name="title" onChange={handleChange} placeholder="Book Title" />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        <Form.Label column="lg" lg={2}>
                            Author
                        </Form.Label>
                        <Col>
                            <Form.Control size="lg" type="text" name="author" onChange={handleChange} placeholder="Book Author" />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        <Form.Label column="lg" lg={2}>
                            ISBN
                        </Form.Label>
                        <Col>
                            <Form.Control size="lg" type="number" name="isbn" onChange={handleChange} placeholder="Book ISBN " />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        <Form.Label column="lg" lg={2}>
                            About : 
                        </Form.Label>
                        <Col>
                            <Form.Control size="lg" as="textarea" rows={5} type="text" name="about" onChange={handleChange} placeholder="Tell us about the book?" />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Button size="lg" type="submit"> Add Book! </Button>
                </Form>
            </div>
        </div>
    );

    

} 


