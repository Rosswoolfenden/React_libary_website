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
import {Account} from './components/account';
import {AddBooks} from './components/addBook';

function App() {
  return (
    <Router>
        
      <Navigation/>
      <Switch>
          <Route path="/" children={<Home />} exact />
          <Route path="/books" children={<Book />} exact />
          <Route path="/addbook" children={<AddBooks />} exact />
          <Route path="/account" children={<Account />} exact />
      </Switch>

    </Router>
    
  );
}

export default App;
