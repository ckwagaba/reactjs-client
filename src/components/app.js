import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../css/main.css';
import RegisterView from './register_view';
import LoginView from './login_view';
import BucketlistView from './bucketlist_view';
import ItemView from './item_view';
import BucketlistForm from './bucketlist_form';
import ItemForm from './item_form';

class App extends Component {
  constructor () {
    super();
    this.state = {
      ACCESSTOKEN: ''
    }
  }

  // handle logout
  handleLogout = (event) => {
    // reset access_token
    this.setState(
      {
        ACCESSTOKEN: ''
      }
    );
  }

  render () {
    // logged in
    if (this.state.ACCESSTOKEN) {
      return (
        <Switch>
          <Route path='/createbucketlist' render={() => (
            <BucketlistForm
              handleLogout={this.handleLogout}
              ACCESSTOKEN={this.state.ACCESSTOKEN}
            />
          )} />
          <Route path='/createitem/:bucketlistId' render={(props) => (
            <ItemForm
              handleLogout={this.handleLogout}
              ACCESSTOKEN={this.state.ACCESSTOKEN}
              {...props}
            />
          )} />
          <Route path='/bucketlists/:bucketlistId/items/' render={(props) => (
            <ItemView
              handleLogout={this.handleLogout}
              ACCESSTOKEN={this.state.ACCESSTOKEN}
              {...props} />
          )} />
          <Route path='/bucketlists/' render={() => (
            <BucketlistView
              handleLogout={this.handleLogout}
              ACCESSTOKEN={this.state.ACCESSTOKEN} />
          )} />
          <Redirect to="/bucketlists/" />
        </Switch>
      );
    }
    // logged out
    else {
      return (
        <Switch>
          <Route path='/auth/register' component={RegisterView} />
          <Route path='/auth/login' component={LoginView} />
          <Route exact path='/' component={RegisterView} />
          <Redirect to="/" />
        </Switch>
      );
    }
  }
}

export default App;
