import React from 'react';
import { shallow } from 'enzyme';
import BucketlistView from '../components/bucketlist_view';

describe('BucketlistView component', () => {

  const component = <BucketlistView />;

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
