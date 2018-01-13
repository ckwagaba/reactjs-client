import React from 'react';
import { shallow } from 'enzyme';
import AltOption from '../components/alt_option';

describe('AltOption component', () => {

  const component = <AltOption />;

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
