import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from '../components/submit_button';

describe ('SubmitButton component', () => {

  it('should exist', () => {
    const component = shallow(<SubmitButton />);
    expect(component.exists()).toEqual(true);
  });

});