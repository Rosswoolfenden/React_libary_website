import React, { useState, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigation} from './components/navigation';
import { Account } from './components/account';
import {Register} from './components/register';
import {AddBooks} from './components/addBook';
import {Login} from './components/login';
import {Messenger} from './components/messager';
import {UserbookList} from './components/userBookList';
import { UpdateBook } from './components/updateBooks';

import {BookList} from './components/bookList';

import {UserContext} from './contexts/context';

function App() {

  const [auth, setAuth] = useState({ID: 26, username: "ross", password: "qwerty", firstName: "Ross "});
  // const [auth, setAuth] = useState();
  const value = useMemo(() => ({auth, setAuth}), [auth, setAuth]);
  return (
    <Router>
    <div>
      
      <UserContext.Provider value={value}>
      <Navigation />
        <Route path="/" exact component={BookList} />
        <Route path="/books" component={BookList} />
        <Route path="/bookist" component={BookList} /> 
        <Route path="/addbook" component={AddBooks} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path='/messenger' component={Messenger} />
        <Route path= '/updatebook' component={UserbookList} />
        <Route path='/update' component={UpdateBook} />
        <Route path='/account' component={Account} />
      </UserContext.Provider>
    </div>
  </Router>
  );
}
export default App;
