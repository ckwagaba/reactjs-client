import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../components/footer';

describe('Footer component', () => {

  const component = shallow(<Footer />);

  it('should exist', () => {
    expect(component.exists()).toEqual(true);
  });

});
