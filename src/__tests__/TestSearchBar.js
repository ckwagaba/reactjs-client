import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../components/SearchBar';

describe('SearchBar component', () => {

  const component = shallow(
    <SearchBar />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
