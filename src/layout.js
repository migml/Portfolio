import React from 'react';
import { NavLink } from 'react-router-dom';

export class Layout extends React.Component {

  render() {
    return <div className="container">
      <div className="header clearfix">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="#">React / Parcel Skeleton</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" exact>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" exact>Contact</NavLink>
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
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