import React from 'react';
import { shallow } from 'enzyme';
import Register from '../components/register';

describe('Register component', () => {

  const component = shallow(<Register />);

  it('should exist', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should have a text field', () => {
    expect(component.find('TextInput').length).toEqual(1);
  });

  it('should have a password field', () => {
    expect(component.find('PasswordInput').length).toEqual(1);
  });

  it('should have a submit button', () => {
    expect(component.find('SubmitButton').length).toEqual(1);
  });

});
