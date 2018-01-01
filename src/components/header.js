import React from 'react';
import SearchBar from './search_bar';

const Header = (props) => {
  return (
    <div className="header">
      <div className="header_left">
        <div className="create_button">+</div>
        <span>{props.currentLocation}</span>
      </div>
      <div className="search">
        <SearchBar placeholder="Enter Search Term" />
      </div>
    </div>
  );
}

export default Header;
