import React, { Component } from 'react';

class ServerResponse extends Component {
  render () {
    return (
      <div className="server_response">
        {this.props.serverResponse}
      </div>
    );
  }
}

export default ServerResponse;
