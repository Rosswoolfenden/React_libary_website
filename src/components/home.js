import React, { useEffect } from 'react';
import axios from 'axios';
//import {Card} from 'bootstrap';

export function Home(props) {

    
    
   // let [books, setBooks] = useState[0];
    const books = [];
    useEffect(() => {
        let book = getBooks();
        books.push(book);
        console.log(books.length);
      //  setBooks( books);
    });
    return (
        <div >
            <div className="App">
                <h1> Public Libary </h1>
            </div>
            <div className="books">
                {books.map((book, index) => (
                    <div key={index}> 
                        <h3> Title = {book.title} </h3>
                    </div>
                ))}
            </div>
            

        </div>
       
        
        // <p> Hello this is the home page welcome to publ</p>

    );
} 

async function getBooks() {

    axios.get("http://localhost:9999/api/v1/books")
        .then(res => {
            console.log(res.data);
            return res.data;
        })
        .catch(e => {
            console.log("we did not get the api call :(");
            console.log(e);
        });

}


// export default Navigation;