import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  // handle logout
  handleLogout = (event) => {
    // reset ACCESSTOKEN and userName in local storage
    localStorage.setItem('ACCESSTOKEN', '');
    localStorage.setItem('userName', '');
  }

  render () {
    return (
      <nav>
        <div className="nav_links">
          <ul className="menu">
            <li><Link to="/bucketlists/">Lists</Link></li>
            <li><Link to="/items/">Goals</Link></li>
            <li><Link to="">Achievements</Link></li>
          </ul>
        </div>
        <div className="nav_options">
          <ul className="menu">
            <li className="username">{localStorage.getItem('userName')}</li>
            <li><Link to="/auth/login" onClick={this.handleLogout}>Logout</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
