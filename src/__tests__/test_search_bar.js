import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../components/search_bar';

describe('SearchBar component', () => {

  const component = <SearchBar />;

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
