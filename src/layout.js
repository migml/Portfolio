import React from 'react';
import { NavLink } from 'react-router-dom';

export class Layout extends React.Component {

  render() {
    return <div className="container">
      <div className="header clearfix">
        <nav>
          <ul className="nav nav-pills float-right">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <h3 className="text-muted">Project name</h3>
      </div>
      <div className="col-xs-12">
        {this.props.children}
      </div>
      <footer className="footer">
        <p>&copy; 2018</p>
      </footer>

    </div>;
  }

}