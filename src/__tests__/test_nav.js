import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../components/nav';

describe('Nav component', () => {

  const component = <Nav />;

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
