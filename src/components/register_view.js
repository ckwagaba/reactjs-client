import React, { Component } from 'react';
import PagePurpose from './page_purpose';
import ServerResponse from './server_response';
import AppDetails from './app_details';
import EmailInput from './email_input';
import SubmitButton from './submit_button';
import PasswordInput from './password_input';
import AltOption from './alt_option';

class RegisterView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      apiResponse: '',
      email: '',
      password: ''
    }
  }

  // handle form submission
  registerUser = (event) => {
    event.preventDefault();
    const requestData = {
      'email': this.state.email,
      'password': this.state.password
    }
    fetch('http://127.0.0.1:5000/v1/auth/register', {
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
          apiResponse: responseData.message
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
    return (
      <div className="landing_page register_view">
        <AppDetails />
        <div className="form_section">
          <PagePurpose purpose="Create your account" />
          <ServerResponse serverResponse={this.state.apiResponse} />
          <form onSubmit={this.registerUser}>
            <EmailInput placeholder="Email Address" value={this.state.email} handleInput={this.handleEmailChange} />
            <PasswordInput placeholder="New Password" value={this.state.password} handleInput={this.handlePasswordChange} />
            <SubmitButton buttonText="Sign Up" />
          </form>
          <AltOption altOptionLink="/auth/login" altOptionText="Sign In" />
        </div>
      </div>
    );
  }
}

export default RegisterView;
