import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/app';

describe('App component', () => {

  const component = shallow(
    <App />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
