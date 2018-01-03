import React, { Component } from 'react';

class Main extends Component {
  render () {
    return (
      <main>
        {this.props.listToRender}
      </main>
    );
  }
}

export default Main;
