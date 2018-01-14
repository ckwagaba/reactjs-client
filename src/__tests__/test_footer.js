import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../components/footer';

describe('Footer component', () => {

  const pagination = () => {
    return true;
  }

  const component = shallow(
    <Footer pagination={pagination} />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
