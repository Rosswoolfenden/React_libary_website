import React, { useState, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigation} from './components/navigation';
// import {BookList} from './components/bookList';
import {Register} from './components/register';
import {AddBooks} from './components/addBook';
import {Login} from './components/login';
import {Sent} from './components/sent';
import {Recieved} from './components/recieved';

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
        <Route path="/" exact component={BookList} />
        <Route path="/books" component={BookList} />
        <Route path="/bookist" component={BookList} /> 
        <Route path="/addbook" component={AddBooks} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path='/sent' component={Sent} />
        <Route path='/recieved' component={Recieved} />
      </UserContext.Provider>
    </div>
  </Router>
  );
}
export default App;
