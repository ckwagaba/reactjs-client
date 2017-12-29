import React, { Component } from 'react';

class TextInput extends Component {
  render () {
    return (
      <div>
        <input type="email" className="text_input email_input" placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default TextInput;
