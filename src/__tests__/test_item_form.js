import React from 'react';
import { shallow } from 'enzyme';
import ItemForm from '../components/item_form';

describe('ItemForm component', () => {

  const component = <ItemForm />;

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
