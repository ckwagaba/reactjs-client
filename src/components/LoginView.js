import React, { Component } from 'react';
import { connect } from 'react-redux';
import PagePurpose from './PagePurpose';
import ServerResponse from './ServerResponse';
import AppDetails from './AppDetails';
import EmailInput from './EmailInput';
import SubmitButton from './SubmitButton';
import PasswordInput from './PasswordInput';
import AltOption from './AltOption';
import { BASEURL } from '../Config.js';
import store from '../store/Store';
import * as ActionTypes from '../actions/ActionTypes'

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      APIResponse: ''
    }
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

  // login user
  handleLogin = (event) => {
    event.preventDefault();
    const requestData = {
      'email': this.state.email,
      'password': this.state.password
    }
    fetch(BASEURL + '/auth/login', {
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
        // store ACCESSTOKEN in redux store
        store.dispatch({
          type: ActionTypes.STORE_ACCESSTOKEN,
          payload: {
            ACCESSTOKEN: responseData.access_token,
            userName: this.state.email.split('@')[0],
            userHasAuthenticated: true
          }
        });
        this.setState(
          {
            email: '',
            password: '',
            APIResponse: ''
          }
        );
        // redirect to dashboard
        this.props.history.push('/bucketlists/');
      }
      // unsuccessful login: display a message
      else {
        this.setState(
          {
            APIResponse: responseData.message
          }
        );
      }
    });
  }

  render () {
    return (
      <div className="landing_page login_view">
        <AppDetails />
        <div className="form_section">
          <PagePurpose purpose="Access your account" />
          <ServerResponse serverResponse={this.state.APIResponse} />
          <form onSubmit={this.handleLogin}>
            <EmailInput placeholder="Email Address" value={this.state.email} handleInput={this.handleEmailChange} />
            <PasswordInput placeholder="Enter Password" value={this.state.password} handleInput={this.handlePasswordChange} />
            <SubmitButton buttonText="Sign In" />
          </form>
          <AltOption altOptionLink="/auth/register" altOptionText="Sign Up" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    authState: store.authView
  }
}

export default connect(mapStateToProps)(LoginView);
