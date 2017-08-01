import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="nav_bar">
        <nav>
          <div className="nav-wrapper blue hoverable">
            <Link to="/"><a href="" className="brand-logo center"><i className="large material-icons">movie_filter</i>StarWars Database</a></Link>
            <ul className="left hide-on-med-and-down">
              <Link to="/">
                <li><a className="waves-effect waves-light waves-red">Home</a></li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;