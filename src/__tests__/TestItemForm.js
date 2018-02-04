import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ItemForm from '../components/ItemForm';

describe('ItemForm component', () => {

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
    <ItemForm {...props} />
  );

  it('should exist', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });

});
