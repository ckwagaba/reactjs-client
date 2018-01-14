import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from '../components/submit_button';

describe ('SubmitButton component', () => {

  const component = shallow(
    <SubmitButton />
  );

  it('should exist', () => {

    expect(component).toMatchSnapshot();
  });

});
