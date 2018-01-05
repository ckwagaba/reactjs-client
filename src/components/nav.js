import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
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
          <li>{props.userName}</li>
          <li><Link to="">Logout</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
