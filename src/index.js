import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './about';
import B from './b';
import {Layout} from './layout';
import * as Popper from 'popper.js';
import * as Bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Router>
    <div>
        <Layout>
            <Route exact path="/" component={About} />
            <Route exact path='/a' component={About} />
            <Route exact path='/b' component={B} />
        </Layout>
    </div>
</Router>, document.getElementById('app')
);