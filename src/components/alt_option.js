import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AltOption extends Component {
  render () {
    return (
      <div className="alt_option">
        <div>or<br /><br /></div>
        <Link to={this.props.altOptionLink}>{this.props.altOptionText}</Link>
      </div>
    );
  }
}

export default AltOption;
