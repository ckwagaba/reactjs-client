import React from 'react';
import { shallow } from 'enzyme';
import ServerResponse from '../components/server_response';

describe('ServerResponse component', () => {

  const component = shallow(
    <ServerResponse />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
