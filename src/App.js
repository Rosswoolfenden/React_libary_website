import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Navigation} from './components/navigation';

function App() {
  return (
    <Router>
        
      <Navigation/>
        

    </Router>
    
  );
}

export default App;
