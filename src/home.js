import React from 'react';
import { NavLink } from 'react-router-dom';

export default class B extends React.Component {
    render() {
        return <p>HOME!<NavLink to="/a">A</NavLink></p>;
    }
}