import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/card';
import {Button, CardGroup, ListGroup} from  'react-bootstrap';
import { useHistory } from 'react-router-dom';

import nobook from '../img/nobook.png';


class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            books: []
        }
    }

  

    componentDidMount() {
        axios.get('http://localhost:9999/api/v1/books')
            .then(res => {
                console.log(res);
                this.setState({books: res.data})
            })
            .catch(e => {
                alert("Failed to get Book data");
                console.log(e);
            });
    }

    

    render() {
        
        if(!this.state.books.length) {
            return <h1> loading</h1>
        }

        
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
                                    <Button onClick={this.routeChange}>
                                        Request Book
                                    </Button>
                                </ListGroup>
                            </ListGroup>
                        </ListGroup.Item>
                    </ListGroup>
                    
                </div>
            );
        }
        


        const bookGrid = this.state.books.map(book => {
            return(
                <div className="book-grid" >
                        {listGroup(book)}
                </div>
            )
        });


        return (
            <div className="book-grid" >
                {/* <CardGroup> */}
                    {bookGrid}
                {/* </CardGroup> */}
                

            </div>
               
               
            
        )
    }
}
export default Books;

//xport default Books;

