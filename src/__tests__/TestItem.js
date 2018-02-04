import React from 'react';
import { shallow } from 'enzyme';
import Item from '../components/Item';

describe('Item component', () => {

  const component = shallow(
    <Item />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
