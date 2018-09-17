import React from 'react';

export class Layout extends React.Component {

    render() {
        return <div>
            <h1>LAYOUT</h1>
            <div>{this.props.children}</div>
        </div>;

    }

}