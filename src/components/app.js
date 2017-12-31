import React, { Component } from 'react';
import '../css/main.css';
import RegisterView from './register_view';
import LoginView from './login_view';

class App extends Component {
  state = {
    loggedIn: false
  }

  render () {
    return (
      <div>
        {this.state.loggedIn ? <RegisterView /> : <LoginView />}
      </div>
    );
  }
}

export default App;
