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

function App() {
  return (
    <Router>
        
      <Navigation/>
      <Switch>
          <Route path="/" children={<Home />} exact />
          <Route path="/addbook" children={<Home />} exact />
          <Route path="/account" children={<Home />} exact />
      </Switch>

    </Router>
    
  );
}

export default App;
