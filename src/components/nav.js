import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ACCESSTOKEN: '',
      userName: ''
    }
  }

  // handle logout
  handleLogout = (event) => {
    // reset access_token
    this.setState(
      {
        ACCESSTOKEN: ''
      }
    );
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
            <li>{this.state.userName}</li>
            <li><Link to="/auth/login" onClick={this.handleLogout}>Logout</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
