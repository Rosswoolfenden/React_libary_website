import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/card';


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
                console.log(e);
            });
    }

    render() {
        if(!this.state.books.length) {
            return <h1> loading</h1>
        }

        const bookGrid = this.state.books.map(book => {
            return(
                <div>
                    <Card style={{width: '18rem'}} >
                        <Card.Body>
                            <Card.Title> {book.title} </Card.Title>
                        </Card.Body>
                    </Card>

                </div>
            )
        })
        return (
            <div>
                {bookGrid}

            </div>
               
               
            
        )
    }
}
export default Books;

//xport default Books;

