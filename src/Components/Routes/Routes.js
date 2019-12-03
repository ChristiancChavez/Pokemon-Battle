
import React from 'react';
//Dependencies
import { Switch, Route } from 'react-router-dom';
//Components
import Tournament from '../Tournament';
import Home from '../Home';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={(rest) => <Home {...rest} />} />
        <Route exact path="/tournament" component={(rest) => <Tournament {...rest} />} />
    </Switch>
)

export default Routes;
