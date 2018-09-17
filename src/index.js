import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import A from './a';
import B from './b';

ReactDOM.render(<Router>
    <div>
        <Route exact path="/" component={A} />
        <Route exact path='/a' component={A} />
        <Route exact path='/b' component={B} />
    </div>
</Router>, document.getElementById('app')
);