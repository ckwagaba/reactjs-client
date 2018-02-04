import React from 'react';
import { shallow } from 'enzyme';
import Bucketlist from '../components/Bucketlist';

describe('Bucketlist component', () => {

  const component = shallow(
    <Bucketlist />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
