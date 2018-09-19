import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './layout';
import {Routes} from './Routes';
import * as Popper from 'popper.js';
import * as Bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Router>
    <Layout>
        <Routes/>
    </Layout>
</Router>, document.getElementById('app')
);