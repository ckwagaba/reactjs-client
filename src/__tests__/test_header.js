import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/header';

describe('Header component', () => {

  const component = <Header />;

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
