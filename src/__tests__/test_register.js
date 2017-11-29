import React from 'react';
import { shallow } from 'enzyme';
import Register from '../components/register.js';

describe('Register component', () => {

  const component = shallow(<Register />);

  it('renders without crashing', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should have a text input', () => {
    expect(component.find('.email_field').length).toEqual(1);
  });

});
