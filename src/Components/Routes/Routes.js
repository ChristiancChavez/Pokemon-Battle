
import React from 'react';
//Dependencies
import { Switch, Route } from 'react-router-dom';
//Components
import Tournament from '../Tournament';
import Home from '../Home';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/tournament" component={Tournament} />
    </Switch>
)

export default Routes;
