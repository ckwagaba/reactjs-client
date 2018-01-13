import React from 'react';
import { shallow } from 'enzyme';
import LoginView from '../components/login_view';

describe('LoginView component', () => {

  const component = <LoginView />;

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
