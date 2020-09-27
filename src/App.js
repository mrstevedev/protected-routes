import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Index';
import About from './components/About';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <PrivateRoute
          exact
          path="/admin/dashboard" 
          component={Dashboard} />
        </Switch>
    </div>
  );
}

export default App;
