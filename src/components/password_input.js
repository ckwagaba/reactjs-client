import React, { Component } from 'react';

class PasswordInput extends Component {
  render () {
    return (
      <div>
        <input type="password" className="text_input password_input" placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.handleInput} />
      </div>
    );
  }
}

export default PasswordInput;
