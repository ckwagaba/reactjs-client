import React from 'react';
import { shallow } from 'enzyme';
import PasswordInput from '../components/password_input';

describe ('PasswordInput component', () => {

  const component = shallow(
    <PasswordInput />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
