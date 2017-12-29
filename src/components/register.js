import React from 'react';
import EmailInput from './email_input';
import SubmitButton from './submit_button';
import PasswordInput from './password_input';

const Register = () => {
  return (
    <div>
      <EmailInput />
      <PasswordInput />
      <PasswordInput />
      <SubmitButton />
    </div>
  );
}

export default Register;
