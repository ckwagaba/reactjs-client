import React from 'react';
import { shallow } from 'enzyme';
import store from '../store/Store';
import ItemView from '../components/ItemView';

describe('ItemView component', () => {

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
    <ItemView {...props} store={store} />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
