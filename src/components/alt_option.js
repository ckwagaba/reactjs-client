import React, { Component } from 'react';

class AltOption extends Component {
  render () {
    return (
      <div className="alt_option">
        <div>or<br /><br /></div>
        <a href={this.props.altOptionLink}>{this.props.altOptionText}</a>
      </div>
    );
  }
}

export default AltOption;
