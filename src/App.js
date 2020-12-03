import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Navigation} from './components/navigation';
import {Home} from './components/home';
import Book from './components/books';
import {Register} from './components/register';
import {AddBooks} from './components/addBook';
import {Login} from './components/login';

function App() {
  return (
    <Router>
        
      <Navigation/>
      <Switch>
          <Route path="/" children={<Home />} exact />
          <Route path="/books" children={<Book />} exact />
          <Route path="/addbook" children={<AddBooks />} exact />
          <Route path="/register" children={<Register />} exact />
          <Route path="/login" children={<Login />} exact/> 
          
      </Switch>

    </Router>
    
  );
}

export default App;
