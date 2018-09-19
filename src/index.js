import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './about';
import Home from './home';
import { Layout } from './layout';
import * as Popper from 'popper.js';
import * as Bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Router>
    <div>
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/home' component={Home} />
        </Layout>
    </div>
</Router>, document.getElementById('app')
);