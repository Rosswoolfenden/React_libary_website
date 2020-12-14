import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import {UserContext} from '../contexts/context'
import {Form, Col, Button} from 'react-bootstrap';
import  { Redirect, useLocation } from 'react-router-dom'

export function UpdateBook(props) {
    const bookFeilds = {
        title: "",
        isbn: 0,
        genre: "",
        about: ""
    };
    const { auth } = useContext(UserContext);
    const [book, setBook] = useState();
    const [posted, setPosted] = useState("not-posted-book");
    const location =  useLocation();
    useEffect(() => {
        setBook(location.Book);
        // book.isbn = location.book.isbn;
        // book.genre = location.book.genre;
        // book.about = location.book.about;
        console.log("Book belwow");
        console.log(book);
    },[]);

    const handleChange = async(event) => {
        setBook({...book, [event.target.name]: event.target.value});
    }

    const handleIntChange = async(event) =>{
        let intValue = parseInt(event.target.value);
        
        setBook({...book, [event.target.name]: intValue});
    }

    const submit = async() => {
        if(!auth) {
            alert("You need to be logged in to complete this aciton ");
            <Redirect to='/login'  />
        } else {
            // await addBookToDb(book);
        }
        
    }
    
    const addBookToDb = async(data)=> {
        axios({
            method: 'post',
            url: 'http://localhost:9999/api/v1/books/add',
            data: data,
            headers: {
                "Authorization": "Basic " + btoa(auth.username + ":" + auth.password),
            }
        }).then(res => {
            console.log(res);
            alert("Succesfully added book!");
            setPosted("posted-book");
        }).catch(e => {
            console.log("THIS DID NOT WORK" + e);
            alert("Failed to add book");
        });
            
    }


    return (
        <div >
            <div className="App">
                <h1>Update Book</h1>
            </div>
            <div className={posted}>
                <h2> Succesfully added Book!</h2>
            </div>
            <div className="Book-Form">
                <Form >
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
                            <Form.Control size="lg" type="number" name="isbn" onChange={handleIntChange} placeholder="Book ISBN " />
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
                <Button size="lg" onClick={submit} > Update Book! </Button>
                </Form>
            </div>
        </div>
    );

    

} 

