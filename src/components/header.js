import React from 'react';
import SearchBar from './search_bar';

const Header = (props) => {
  return (
    <header>
      <div className="header_left">
        <div className="create_button">+</div>
        <span>{props.currentLocation}</span>
      </div>
      <div className="search">
        <SearchBar placeholder="Enter Search Term" />
      </div>
    </header>
  );
}

export default Header;
