import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Navigation} from './components/navigation';
import {Home} from './components/home';
import {Books} from './components/books';
import {Account} from './components/account';

function App() {
  return (
    <Router>
        
      <Navigation/>
      <Switch>
          <Route path="/" children={<Home />} exact />
          <Route path="/books" children={<Books />} exact />
          <Route path="/addbook" children={<Home />} exact />
          <Route path="/account" children={<Account />} exact />
      </Switch>

    </Router>
    
  );
}

export default App;
