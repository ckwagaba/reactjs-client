import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
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
      accessToken: '',
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
      // store access token for global use
      if(responseData.access_token){
        console.log(responseData.access_token);
        this.setState(
          {
            accessToken: responseData.access_token
          }
        );
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

  render () {
    if (this.state.accessToken) {
      return (
        <Switch>
          <Route path='/auth/login' component={BucketlistView} />
          <Route exact path='/' component={BucketlistView} />
          <Route path='/bucketlists/' component={BucketlistView} />
          <Route path='/bucketlists/:bucketlist_id' component={BucketlistView} />
          <Route path='/items/' component={ItemView} />
          <Route path='/bucketlists/:bucketlist_id/items/' component={ItemView} />
          <Route path='/bucketlists/:bucketlist_id/items/:item_id' component={ItemView} />
        </Switch>
      );
    }
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
