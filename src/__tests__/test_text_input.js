import React from 'react';
import { shallow } from 'enzyme';
import TextInput from '../components/text_input';

describe ('TextInput component', () => {

  it('should exist', () => {
    const component = shallow(<TextInput />);
    expect(component.exists()).toEqual(true);
  });

});
