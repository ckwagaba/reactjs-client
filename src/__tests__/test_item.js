import React from 'react';
import { shallow } from 'enzyme';
import Item from '../components/item';

describe('Item component', () => {

  const component = <Item />;

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
