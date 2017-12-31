import React from 'react';
import PagePurpose from './page_purpose';
import ServerResponse from './server_response';
import AppDetails from './app_details';
import EmailInput from './email_input';
import SubmitButton from './submit_button';
import PasswordInput from './password_input';
import AltOption from './alt_option';

const RegisterView = () => {
  return (
    <div className="landing_page register_view">
      <AppDetails />
      <div className="form_section">
        <PagePurpose purpose="Create your account" />
        <ServerResponse />
        <form>
          <EmailInput placeholder="Email Address" />
          <PasswordInput placeholder="New Password" />
          <PasswordInput placeholder="Confirm Password" />
          <SubmitButton buttonText="Sign Up" />
        </form>
        <AltOption altOptionLink="/auth/login" altOptionText="Sign In" />
      </div>
    </div>
  );
}

export default RegisterView;
