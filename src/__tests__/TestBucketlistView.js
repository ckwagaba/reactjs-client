import React from 'react';
import { shallow } from 'enzyme';
import store from '../store/Store';
import BucketlistView from '../components/BucketlistView';

describe('BucketlistView component', () => {

  const component = shallow(
    <BucketlistView store={store} />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
