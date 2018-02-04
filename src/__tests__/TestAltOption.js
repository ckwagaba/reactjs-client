import React from 'react';
import { shallow } from 'enzyme';
import AltOption from '../components/AltOption';

describe('AltOption component', () => {

  const component = shallow(
    <AltOption />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
