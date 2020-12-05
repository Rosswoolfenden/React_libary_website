import React, { useContext } from 'react';
// import axios from 'axios';
import {UserContext} from '../contexts/context';
//import {Card} from 'bootstrap';

export function Home() {

    const {auth} = useContext(UserContext);    
    console.log(auth);
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
                {JSON.stringify(auth)}
            </div>
            
            
            

        </div>
       
        
        // <p> Hello this is the home page welcome to publ</p>

    );
} 

// export default Navigation;