
import React from 'react';
import './App.scss';
//components
import Routes from '../Routes';
//Dependencies
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
    <Router>
      <Routes />
    </Router>
)

export default App;
