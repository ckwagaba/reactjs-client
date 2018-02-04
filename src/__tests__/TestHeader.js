import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe('Header component', () => {

  const component = shallow(
    <Header />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
