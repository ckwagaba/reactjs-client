import React from 'react';
import { shallow } from 'enzyme';
import RegisterView from '../components/RegisterView';

describe('RegisterView component', () => {

  const component = shallow(
    <RegisterView />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
