import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  // handle logout
  handleLogout = (event) => {
    // reset ACCESSTOKEN and userName in local storage
    localStorage.setItem('ACCESSTOKEN', '');
    localStorage.setItem('userName', '');
    window.location.pathname = '/auth/login';
  }

  render () {
    return (
      <nav>
        <div className="nav_links">
          <ul className="menu">
            <li><Link to="/bucketlists/">Bucketlists</Link></li>
            <li><Link to="">NavLink</Link></li>
            <li><Link to="">NavLink</Link></li>
          </ul>
        </div>
        <div className="nav_options">
          <ul className="menu">
            <li className="username">{localStorage.getItem('userName')}</li>
            <li onClick={this.handleLogout} className="logout_button">Logout</li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
