import React from 'react';
import { shallow } from 'enzyme';
import Main from '../components/Main';

describe('Main component', () => {

  const component = shallow(
    <Main />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
