
import React from 'react';
import './App.scss';
import Routes from '../Routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
    <Router className="App" >
      <Routes />
    </Router>
)

export default App;
