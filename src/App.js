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
import {SendRequestMsg} from './components/sendRequestMsg';
import {Messenger} from './components/messager';
import {RequestMsgList} from './components/requestMsgList'


import {BookList} from './components/bookList';

import {UserContext} from './contexts/context';

function App() {

  const [auth, setAuth] = useState({username: "ross", password: "qwerty"});
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
        <Route path='/send' component={SendRequestMsg} />
        <Route path='/sent' component={RequestMsgList} />
        <Route path='/messenger' component={Messenger} />
      </UserContext.Provider>
    </div>
  </Router>
  );
}
export default App;
