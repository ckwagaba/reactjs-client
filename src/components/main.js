import React, { Component } from 'react';

class Main extends Component {
  render () {
    return (
      <main>
        {this.props.componentToRender}
      </main>
    );
  }
}

export default Main;
