import React from 'react';
import {NavLink} from 'react-router-dom';

export default class A extends React.Component {
    render() {
        return <p>A! <NavLink to="/b">B</NavLink>
        <button type="button" className="btn btn-primary btn-lg">Large button</button>
<button type="button" className="btn btn-secondary btn-lg">Large button</button>
        </p>;
    }

}