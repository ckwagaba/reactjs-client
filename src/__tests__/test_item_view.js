import React from 'react';
import { shallow } from 'enzyme';
import ItemView from '../components/item_view';

describe('ItemView component', () => {

  const component = <ItemView />;

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
