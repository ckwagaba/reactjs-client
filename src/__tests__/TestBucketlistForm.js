import React from 'react';
import { shallow } from 'enzyme';
import BucketlistForm from '../components/BucketlistForm';

describe('BucketlistForm component', () => {

  const props = {
    match: {
      params: {
        bucketlistId: 1,
        itemName: 'career',
        itemId: 1
      }
    },
    history: '/bucketlists/'
  }

  const component = shallow(
    <BucketlistForm {...props} />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
