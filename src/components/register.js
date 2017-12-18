import React from 'react';
import TextInput from './text_input';
import SubmitButton from './submit_button';
import PasswordInput from './password_input';

const Register = () => {
  return (
    <div>
      <TextInput />
      <PasswordInput />
      <PasswordInput />
      <SubmitButton />
    </div>
  );
}

export default Register;
