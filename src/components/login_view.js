import React from 'react';
import PagePurpose from './page_purpose';
import ServerResponse from './server_response';
import AppDetails from './app_details';
import EmailInput from './email_input';
import SubmitButton from './submit_button';
import PasswordInput from './password_input';
import AltOption from './alt_option';

const LoginView = () => {
  return (
    <div className="landing_page login_view">
      <AppDetails />
      <div className="form_section">
        <PagePurpose purpose="Access your account" />
        <ServerResponse />
        <form>
          <EmailInput placeholder="Email Address" />
          <PasswordInput placeholder="Enter Password" />
          <SubmitButton buttonText="Sign In" />
        </form>
        <AltOption altOptionLink="#" altOptionText="Sign Up" />
      </div>
    </div>
  );
}

export default LoginView;
