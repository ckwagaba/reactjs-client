import React, { Component } from 'react';
import PagePurpose from './page_purpose';
import ServerResponse from './server_response';
import AppDetails from './app_details';
import EmailInput from './email_input';
import SubmitButton from './submit_button';
import PasswordInput from './password_input';
import AltOption from './alt_option';

class RegisterView extends Component {
  render () {
    return (
      <div className="landing_page register_view">
        <AppDetails />
        <div className="form_section">
          <PagePurpose purpose="Create your account" />
          <ServerResponse serverResponse={this.props.APIResponse} />
          <form onSubmit={this.props.submitForm}>
            <EmailInput placeholder="Email Address" value={this.props.email} handleInput={this.props.handleEmailChange} />
            <PasswordInput placeholder="New Password" value={this.props.password} handleInput={this.props.handlePasswordChange} />
            <SubmitButton buttonText="Sign Up" />
          </form>
          <AltOption altOptionLink="/auth/login" altOptionText="Sign In" />
        </div>
      </div>
    );
  }
}

export default RegisterView;
