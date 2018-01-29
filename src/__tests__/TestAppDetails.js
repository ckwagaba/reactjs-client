import React from 'react';
import { shallow } from 'enzyme';
import AppDetails from '../components/AppDetails';

describe('AppDetails component', () => {

  const component = shallow(
    <AppDetails />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
