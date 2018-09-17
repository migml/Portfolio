import React from 'react';
import { Route, Router, Switch } from 'react-router'
import A from './a';
import B from './b';

export const Rutas = () => {
    return <Router>
        
            <Route  path='/a' component={A} />
            <Route  path='/b' component={B} />
       
    </Router>
};