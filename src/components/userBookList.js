import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {Button, ListGroup} from  'react-bootstrap';
import { useHistory } from 'react-router-dom';
import nobook from '../img/nobook.png';
import { UserContext } from '../contexts/context';

export function UserbookList() { 
    const { auth } = useContext(UserContext)
    const [books, setBooks] =  useState([]);

    const history = useHistory();

    useEffect(() => {
        axios({
            method: 'get',
            url:'http://localhost:9999/api/v1/books/mybooks',
            headers: {
                "Authorization": "Basic " + btoa(auth.username + ":" + auth.password),
            }
        }).then(res => {
               setBooks(res.data);
        }).catch(e => {
            alert("Failed to get Book data");
            console.log(e);
        });
    },[auth.password, auth.username]);

    const editBook =  async(book) => {
        let path= '/update';
        history.push({
            pathname: path,
            Book: book
        })
    }

    const delbook = async(book) => {
        const bookid = (book.ID).toString();
        const url = 'http://localhost:9999/api/v1/books/' + bookid;
        console.log(url);
        
        axios({
            method: 'delete',
            url: url,
            headers : {
                "Authorization": "Basic " + btoa(auth.username + ":" + auth.password),
            }
        }).then(res => {
            alert("Succsefully deleted book");
        }).catch(e => {
            alert("Failed to delete book");
        });
        console.log(book);
    }

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
                                <div> 
                                    <Button onClick={() => {editBook(book)} }>
                                        Update Book
                                    </Button>
                                    -
                                    <Button variant="danger" onClick={() => delbook(book)}>
                                        Delete Book
                                    </Button>
                                </div>
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
            <h1 className="header"> Your Books </h1>
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