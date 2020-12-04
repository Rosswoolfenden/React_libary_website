import React, { useContext } from 'react';
// import axios from 'axios';
import {UserContext} from '../contexts/context';
//import {Card} from 'bootstrap';

export function Home(props) {

    const {auth} = useContext(UserContext);    
   // let [books, setBooks] = useState[0];
    // const books = [];
    // useEffect(() => {
    //     let book = getBooks();
    //     books.push(book);
    //     console.log(books.length);
    //   //  setBooks( books);
    // });
    return (
        <div >
            <div className="App">
                <h1> Public Lsdibary </h1>
                <p> The user is {JSON.stringify(auth)} </p>
            </div>
            
            
            

        </div>
       
        
        // <p> Hello this is the home page welcome to publ</p>

    );
} 

// export default Navigation;