import React, { Component } from 'react';
import PagePurpose from './page_purpose';
import ServerResponse from './server_response';
import AppDetails from './app_details';
import EmailInput from './email_input';
import SubmitButton from './submit_button';
import PasswordInput from './password_input';
import AltOption from './alt_option';

class LoginView extends Component {
  render () {
    return (
      <div className="landing_page login_view">
        <AppDetails />
        <div className="form_section">
          <PagePurpose purpose="Access your account" />
          <ServerResponse serverResponse={this.props.APIResponse} />
          <form onSubmit={this.props.submitForm}>
            <EmailInput placeholder="Email Address" value={this.props.email} handleInput={this.props.handleEmailChange} />
            <PasswordInput placeholder="Enter Password" value={this.props.password} handleInput={this.props.handlePasswordChange} />
            <SubmitButton buttonText="Sign In" />
          </form>
          <AltOption altOptionLink="/auth/register" altOptionText="Sign Up" />
        </div>
      </div>
    );
  }
}

export default LoginView;
