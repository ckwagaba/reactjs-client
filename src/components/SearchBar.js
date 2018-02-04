import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <input type="text" className="text_input search_input" placeholder={props.placeholder} value={props.searchTerm} onChange={props.handleSearch} />
    </div>
  );
}

export default SearchBar;
