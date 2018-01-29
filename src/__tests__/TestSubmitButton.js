import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from '../components/SubmitButton';

describe ('SubmitButton component', () => {

  const component = shallow(
    <SubmitButton />
  );

  it('should exist', () => {

    expect(component).toMatchSnapshot();
  });

});
