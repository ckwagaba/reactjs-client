import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/button';

describe('Button component', () => {

  const component = <Button />;

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
