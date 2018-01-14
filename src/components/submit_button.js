import React, { Component } from 'react';

class SubmitButton extends Component {
  render () {
    return (
      <div>
        <input type="submit" className="submit_button" value={this.props.buttonText} />
      </div>
    );
  }
}

export default SubmitButton;
