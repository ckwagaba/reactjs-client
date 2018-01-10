import React from 'react';
import SearchBar from './search_bar';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <div className="header_left">
        <Link to={props.itemForm}>
          <div className="round_button create_button">+</div>
        </Link>
        <span>{props.currentLocation}</span>
        <span className="bucketlist_name">{props.bucketlistName}</span>
      </div>
      <div className="search">
        <SearchBar placeholder="Enter Search Term" searchTerm={props.searchTerm} handleSearch={props.handleSearch} />
      </div>
    </header>
  );
}

export default Header;
