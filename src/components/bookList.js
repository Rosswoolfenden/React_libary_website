import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {Button, ListGroup} from  'react-bootstrap';
import { Sendrequest } from './reqest_book_popup';
import nobook from '../img/nobook.png';
import { UserContext } from '../contexts/context';

export function BookList() { 
    const { auth } = useContext(UserContext)
    const [books, setBooks] =  useState([]);

    const [selected, selectBook] =  useState();

    const goToMsg = (book) => {
        if(!auth) {
            alert('You need to sign in to complete this aciton');
        } else {
            selectBook(book);
        }
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
                <img alt="" src={nobook} />
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
                        <ListGroup   variant="flush" >
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
                                
                                {selected ? (
                                    <div > 
                                        <Sendrequest bookId={selected} close={selectBook} />
                                    </div>
                                ) : (
                                    <div> 
                                        <Button onClick={() => { goToMsg(book)} }>
                                            Request Book
                                        </Button>
                                    </div>
                                )}
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
{/*             
            {selected ? (
                <div > 
                    <Sendrequest />
                </div>
            ) : (
                <div> 

                </div>
            )} */}
            {bookGrid}
        </div>
    )
}