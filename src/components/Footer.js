import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer>
        {this.props.pageButtons}
      </footer>
    );
  }
}

export default Footer;
