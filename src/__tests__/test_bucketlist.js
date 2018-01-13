import React from 'react';
import { shallow } from 'enzyme';
import Bucketlist from '../components/bucketlist';

describe('Bucketlist component', () => {

  const component = <Bucketlist />;

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
