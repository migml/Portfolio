import React from 'react';
import { Route, Router, Switch } from 'react-router'
import About from './about';
import Home from './home';

export const Rutas = () => {
    return <Router>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/home' component={Home} />

    </Router>
};