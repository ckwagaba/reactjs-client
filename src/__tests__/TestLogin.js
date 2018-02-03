import React from 'react';
import { shallow } from 'enzyme';
import store from '../store/Store';
import LoginView from '../components/LoginView';

describe('LoginView component', () => {

  const component = shallow(
    <LoginView store={store} />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
