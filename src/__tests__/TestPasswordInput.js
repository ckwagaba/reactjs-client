import React from 'react';
import { shallow } from 'enzyme';
import PasswordInput from '../components/PasswordInput';

describe ('PasswordInput component', () => {

  const component = shallow(
    <PasswordInput />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
