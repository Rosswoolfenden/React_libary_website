import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Button, ListGroup} from  'react-bootstrap';
import { useHistory } from 'react-router-dom';

import nobook from '../img/nobook.png';

export function BookList() { 
    const [books, setBooks] =  useState([]);
    // const []
    console.log("we have been called");


    const history = useHistory();
    const goToMsg = (book) => {
        console.log("been called " + book);
        let path = '/send';
        history.push({
            pathname: path,
            Book: book
        })
        
    }

    useEffect(() => {
        axios.get('http://localhost:9999/api/v1/books')
            .then(res => {
               setBooks(res.data);
            })
            .catch(e => {
                alert("Failed to get Book data");
                console.log(e);
            });
    },[]);

    const bookPhoto = (img) => {
        if(!img) { 
            return (
                <img src={nobook} />
            )
        } else {
            return (
                <p> photo </p>
            )

        }
    }

    const listGroup = (book) => {
        return (
            <div>
                <ListGroup horizontal> 
                    <ListGroup.Item className="book-photo"> 
                    {bookPhoto(book.imageURL)} 
                    </ListGroup.Item>
                    <ListGroup.Item className="book-description">
                        <ListGroup varient  variant="flush" >
                            <ListGroup.Item> 
                                {book.title} {book.isbn}
                            </ListGroup.Item>
                            <ListGroup.Item> 
                                {book.author}
                            </ListGroup.Item>
                            <ListGroup.Item className="book-description">
                                {book.about}
                            </ListGroup.Item>
                            <ListGroup className="requestButton">
                                <Button onClick={() => { goToMsg(book)} }>
                                    Request Book
                                </Button>
                            </ListGroup>
                        </ListGroup>
                    </ListGroup.Item>
                </ListGroup>
                
            </div>
        );
    }
    


    const bookGrid = books.map(book => {
        return(
            <div className="book-grid" >
                    {listGroup(book)}
            </div>
        )
    });
    return (
        <div className="book-grid">
            <h1 className="header"> Books </h1>
            <h2 className="header">  Search </h2>
            {bookGrid}
        </div>
    )
}