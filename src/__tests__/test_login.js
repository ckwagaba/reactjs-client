import React from 'react';
import { shallow } from 'enzyme';
import LoginView from '../components/login_view';

describe('Register component', () => {

  const component = shallow(<LoginView />);

  it('should exist', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should have an email field', () => {
    expect(component.find('EmailInput').length).toEqual(1);
  });

  it('should have a password field', () => {
    expect(component.find('PasswordInput').length).toEqual(1);
  });

  it('should have a submit button', () => {
    expect(component.find('SubmitButton').length).toEqual(1);
  });

  it('should have app details', () => {
    expect(component.find('AppDetails').length).toEqual(1);
  });

  it('should have page purpose', () => {
    expect(component.find('PagePurpose').length).toEqual(1);
  });

  it('should have a server response', () => {
    expect(component.find('ServerResponse').length).toEqual(1);
  });

  it('should have an alternative option', () => {
    expect(component.find('AltOption').length).toEqual(1);
  });

});
