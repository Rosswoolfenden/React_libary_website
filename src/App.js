import React, { useState, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Button, FormControl, Form} from 'react-bootstrap';
import {Navigation} from './components/navigation';
import {Home} from './components/home';
import Book from './components/books';
import {Register} from './components/register';
import {AddBooks} from './components/addBook';
import {Login} from './components/login';

import {BookList} from './components/bookList';

import {UserContext} from './contexts/context';

function App() {

  const [auth, setAuth] = useState(null);
  const value = useMemo(() => ({auth, setAuth}), [auth, setAuth]);
  console.log("VALUE PARESED IN IS " + value);
  return (
    <Router>
    <div>
      
      <UserContext.Provider value={value}>
      <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/books" component={Book} />
        <Route path="/bookist" component={BookList} /> 
        <Route path="/addbook" component={AddBooks} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </UserContext.Provider>
    </div>
  </Router>
  );
}
{/* <Route path="/" children={<Home />} exact />
              <Route path="/books" children={<Book />} exact />
              <Route path="/addbook" children={<AddBooks />} exact />
              <Route path="/register" children={<Register />} exact />
              <Route path="/login" children={<Login />} exact/>  */}

export default App;
