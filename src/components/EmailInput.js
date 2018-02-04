import React, { Component } from 'react';

class EmailInput extends Component {
  render () {
    return (
      <div>
        <input type="email" className="text_input email_input" placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.handleInput} />
      </div>
    );
  }
}

export default EmailInput;
