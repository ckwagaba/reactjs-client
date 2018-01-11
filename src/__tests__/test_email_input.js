import React from 'react';
import { shallow } from 'enzyme';
import EmailInput from '../components/email_input';

describe('EmailInput component', () => {

  const component = shallow(<EmailInput />);

  it('should exist', () => {
    expect(component.exists()).toEqual(true);
  });

});
