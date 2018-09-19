import React from 'react';
import { Route, Switch } from 'react-router'
import About from './about';
import Home from './home';
import Contact from './contact'

export class Routes extends React.Component {
    render() {
        return <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/home' component={Home} />
            <Route path='/contact' component={Contact} />
        </Switch>;
    }
};