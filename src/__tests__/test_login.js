import React from 'react';
import { shallow } from 'enzyme';
import LoginView from '../components/login_view';

describe('Register component', () => {

  const component = shallow(<LoginView />);

  it('should exist', () => {
    expect(component.exists()).toEqual(true);
  });

});
