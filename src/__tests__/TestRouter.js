import React from 'react';
import { shallow } from 'enzyme';
import Router from '../components/Router';

describe('Router component', () => {

  const component = shallow(
    <Router />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
