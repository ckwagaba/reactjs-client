import React from 'react';
import { shallow } from 'enzyme';
import LoginView from '../components/LoginView';

describe('LoginView component', () => {

  const component = shallow(
    <LoginView />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
