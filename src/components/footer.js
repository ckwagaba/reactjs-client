import React, { Component } from 'react';

class Footer extends Component {
  componentDidMount() {
    this.props.pagination();
  }

  render () {
    return (
      <footer>
        {this.props.pageButtons}
      </footer>
    );
  }
}

export default Footer;
