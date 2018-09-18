import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import A from './a';
import B from './b';
import {Layout} from './layout';
import * as Popper from 'popper.js';
import * as Bootstrap from 'bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Router>
    <div>
        <Layout>
            <Route exact path="/" component={A} />
            <Route exact path='/a' component={A} />
            <Route exact path='/b' component={B} />
        </Layout>
    </div>
</Router>, document.getElementById('app')
);