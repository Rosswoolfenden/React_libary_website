import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/card';
import {Button, CardGroup} from  'react-bootstrap';


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
        const card = (book) => {
            return (
                <div>
                    <Card className="card-style" > 
                        <Card.Body>
                            <Card.Title> {book.title} </Card.Title>
                            <Card.Text> {book.about} </Card.Text>
                            <Card.Text> {book.rating} </Card.Text>
                            <Card.Text> {book.status} </Card.Text>
                            <Button  variant="success" size="lg" block>Request book</Button>
                        </Card.Body>
                    </Card>
                </div>
            );
        }
        const bookGrid = this.state.books.map(book => {
            return(
                <div className="book-grid" >
                   
                    
                        {card(book)}
                </div>
            )
        })
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

