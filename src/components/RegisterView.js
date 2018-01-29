import React, { Component } from 'react';
import PagePurpose from './PagePurpose';
import ServerResponse from './ServerResponse';
import AppDetails from './AppDetails';
import EmailInput from './EmailInput';
import SubmitButton from './SubmitButton';
import PasswordInput from './PasswordInput';
import AltOption from './AltOption';
import { BASEURL } from '../Config.js';

class RegisterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
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

  // confirm password
  handleConfirmPasswordChange = (event) => {
    this.setState({
      confirmPassword: event.target.value
    });
  }

  // create new user
  createUser = (event) => {
    event.preventDefault();
    // if passwords match
    if (this.state.password === this.state.confirmPassword) {
      const requestData = {
        'email': this.state.email,
        'password': this.state.password
      }
      fetch(BASEURL + '/auth/register', {
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
        this.setState(
          {
            APIResponse: responseData.message,
            'email': '',
            'password': ''
          }
        );
      });
    }
    // passwords do not match
    else {
      this.setState(
        {
          APIResponse: 'Passwords should match'
        }
      );
    }
  }

  render () {
    return (
      <div className="landing_page register_view">
        <AppDetails />
        <div className="form_section">
          <PagePurpose purpose="Create your account" />
          <ServerResponse serverResponse={this.state.APIResponse} />
          <form onSubmit={this.createUser}>
            <EmailInput placeholder="Email Address" value={this.state.email} handleInput={this.handleEmailChange} />
            <PasswordInput placeholder="New Password" value={this.state.password} handleInput={this.handlePasswordChange} />
            <PasswordInput placeholder="Confirm Password" value={this.state.confirmPassword} handleInput={this.handleConfirmPasswordChange} />
            <SubmitButton buttonText="Sign Up" />
          </form>
          <AltOption altOptionLink="/auth/login" altOptionText="Sign In" />
        </div>
      </div>
    );
  }
}

export default RegisterView;
