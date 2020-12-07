import React, {useEffect, useState} from 'react';
// import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Form, Button, FormControl, Card } from 'react-bootstrap';
// import nobook from '../img/nobook.png';

export function Sent(props) {
    const [chats, setChats] =  useState();
    const [book, setBook] = useState();
    const location = useLocation();

    useEffect(() => {
        console.log(location.Book);
        setBook(location.Book);
        // axios.get('http://localhost:9999/api/v1/books')
        //     .then(res => {
        //         setChats(res.data);
        //     })
        //     .catch(e => {
        //         alert("Failed to get Book data");
        //         console.log(e);
        //     });
    },[] );

    const getBook = () => {
        return book.title;
    }
    
    return  (
        <div className="header">
            <h1> Send Message </h1>
            <Card className="chatcard">
                <Card.Title> 
                    Message
                </Card.Title>
            <Card.Footer className="sendMessage"variant="bottom">
                 <Form inline >
                    <FormControl  className="messagebox" type="text" placeholder=" Send Message " className="mr-sm-2" />
                    <Button variant="outline-success"> Search </Button>
                </Form>
            </Card.Footer>
               
            </Card>
            

        </div>
    )


}