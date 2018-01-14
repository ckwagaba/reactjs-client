import React from 'react';
import { shallow } from 'enzyme';
import BucketlistView from '../components/bucketlist_view';

describe('BucketlistView component', () => {

  const component = shallow(
    <BucketlistView />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
