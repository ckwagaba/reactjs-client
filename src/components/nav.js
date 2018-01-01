import React from 'react';

const Nav = (props) => {
  return (
    <nav>
      <div className="nav_links">
        <ul className="menu">
          <li><a href="/bucketlists/">Lists</a></li>
          <li><a href="/items/">Goals</a></li>
          <li><a href="">Achievements</a></li>
        </ul>
      </div>
      <div className="nav_options">
        <ul className="menu">
          <li>{props.userName}</li>
          <li><a href="">Logout</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
