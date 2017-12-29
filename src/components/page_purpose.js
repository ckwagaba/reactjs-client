import React, { Component } from 'react';

class PagePurpose extends Component {
  render () {
    return (
      <div className="page_purpose">
        {this.props.purpose}
      </div>
    );
  }
}

export default PagePurpose;
