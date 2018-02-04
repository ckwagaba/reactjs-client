import React from 'react';
import { shallow } from 'enzyme';
import EmailInput from '../components/EmailInput';

describe('EmailInput component', () => {

  const component = shallow(
    <EmailInput />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
