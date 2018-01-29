import React from 'react';
import { shallow } from 'enzyme';
import App from '../containers/App';

describe('App component', () => {

  const component = shallow(
    <App />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
