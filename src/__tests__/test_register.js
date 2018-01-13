import React from 'react';
import { shallow } from 'enzyme';
import RegisterView from '../components/register_view';

describe('RegisterView component', () => {

  const component = <RegisterView />;

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
