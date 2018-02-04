import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../components/Nav';

describe('Nav component', () => {

  const component = shallow(
    <Nav />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
