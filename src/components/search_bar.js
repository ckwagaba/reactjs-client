import React, { Component } from 'react';

class SearchBar extends Component {
  render () {
    return (
      <div>
        <input type="text" className="text_input search_input" placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default SearchBar;
