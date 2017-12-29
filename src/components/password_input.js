import React, { Component } from 'react';

class PasswordInput extends Component {
  render () {
    return (
      <div>
        <input type="password" className="text_input password_input" placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default PasswordInput;
