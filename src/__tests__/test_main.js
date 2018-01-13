import React from 'react';
import { shallow } from 'enzyme';
import Main from '../components/main';

describe('Main component', () => {

  const component = <Main />;

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
