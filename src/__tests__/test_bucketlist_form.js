import React from 'react';
import { shallow } from 'enzyme';
import BucketlistForm from '../components/bucketlist_form';

describe('BucketlistForm component', () => {

  const component = <BucketlistForm />;

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
