import React from 'react';
import { shallow } from 'enzyme';
import PasswordInput from '../components/password_input';

describe ('PasswordInput component', () => {

  it('should exist', () => {
    const component = <PasswordInput />;
    expect(component).toMatchSnapshot();
  });

});
