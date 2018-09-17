import React from 'react';
import {NavLink} from 'react-router-dom';

export default class A extends React.Component {
    render() {
        return <p>A! <NavLink to="/b">B</NavLink></p>;
    }

}