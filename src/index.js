import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import RegisterView from './components/register_view';
import LoginView from './components/login_view';
import registerServiceWorker from './registerServiceWorker';

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

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
