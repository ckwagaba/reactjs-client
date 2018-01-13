import React from 'react';
import { shallow } from 'enzyme';
import AppDetails from '../components/app_details';

describe('AppDetails component', () => {

  const component = <AppDetails />;

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
