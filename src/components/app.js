import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../css/main.css';
import RegisterView from './register_view';
import LoginView from './login_view';
import BucketlistView from './bucketlist_view';
import ItemView from './item_view';

class App extends Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
      ACCESSTOKEN: '',
      APIResponse: ''
    }
  }

  // handle form submission
  submitForm = (event, endpoint) => {
    event.preventDefault();
    const requestData = {
      'email': this.state.email,
      'password': this.state.password
    }
    const BASEURL = 'http://127.0.0.1:5000/v1';
    fetch(BASEURL + endpoint, {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json()
    })
    .then(responseData => {
      // on successful login
      if(responseData.access_token){
        // store access_token for use in other endpoints
        this.setState(
          {
            ACCESSTOKEN: responseData.access_token
          }
        );
        // redirect to BucketlistView
      }
      this.setState(
        {
          APIResponse: responseData.message
        }
      );
    });
  }

  // set the email address
  handleEmailChange = (event) => {
    this.setState(
      {
        email: event.target.value
      }
    );
  }

  // set the password
  handlePasswordChange = (event) => {
    this.setState(
      {
        password: event.target.value
      }
    );
  }

  // handle logout
  handleLogout = (event) => {
    // reset access_token
    this.setState(
      {
        ACCESSTOKEN: '',
        'email': '',
        'password': '',
        'APIResponse': ''
      }
    );
    // redirect to LoginView
  }

  render () {
    // logged in
    if (this.state.ACCESSTOKEN) {
      return (
        <Switch>
          <Route path='/bucketlists/' render={() => (
            <BucketlistView handleLogout={this.handleLogout} />
          )} />
          <Route path='/bucketlists/:bucketlist_id' render={() => (
            <BucketlistView handleLogout={this.handleLogout} />
          )} />
          <Route path='/items/' render={() => (
            <ItemView handleLogout={this.handleLogout} />
          )} />
          <Route path='/bucketlists/:bucketlist_id/items/' render={() => (
            <ItemView handleLogout={this.handleLogout} />
          )} />
          <Route path='/bucketlists/:bucketlist_id/items/:item_id' render={() => (
            <ItemView handleLogout={this.handleLogout} />
          )} />
          <Redirect to="/bucketlists/" />
        </Switch>
      );
    }
    // logged out
    else {
      return (
        <Switch>
          <Route exact path='/' render={(props) => (
            <RegisterView
              APIResponse={this.state.APIResponse}
              submitForm={(event) => this.submitForm(event, '/auth/register')}
              email={this.state.email}
              password={this.state.password}
              handleEmailChange={this.handleEmailChange}
              handlePasswordChange={this.handlePasswordChange}
            />
          )} />
          <Route path='/auth/register' render={(props) => (
            <RegisterView
              APIResponse={this.state.APIResponse}
              submitForm={(event) => this.submitForm(event, '/auth/register')}
              email={this.state.email}
              password={this.state.password}
              handleEmailChange={this.handleEmailChange}
              handlePasswordChange={this.handlePasswordChange}
            />
          )} />
          <Route path='/auth/login' render={(props) => (
            <LoginView
              APIResponse={this.state.APIResponse}
              submitForm={(event) => this.submitForm(event, '/auth/login')}
              email={this.state.email}
              password={this.state.password}
              handleEmailChange={this.handleEmailChange}
              handlePasswordChange={this.handlePasswordChange}
            />
          )} />
        </Switch>
      );
    }
  }
}

export default App;
