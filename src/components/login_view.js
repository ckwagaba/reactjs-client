import React, { Component } from 'react';
import PagePurpose from './page_purpose';
import ServerResponse from './server_response';
import AppDetails from './app_details';
import EmailInput from './email_input';
import SubmitButton from './submit_button';
import PasswordInput from './password_input';
import AltOption from './alt_option';

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
    fetch('http://127.0.0.1:5000/v1/auth/login', {
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
        // local storage of ACCESSTOKEN and userName
        localStorage.setItem('ACCESSTOKEN', responseData.access_token);
        localStorage.setItem('userHasAuthenticated', true);
        // get first part of email
        localStorage.setItem('userName', this.state.email.split('@')[0]);
        // clear form
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

export default LoginView;
