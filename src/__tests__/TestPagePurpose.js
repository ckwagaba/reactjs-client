import React from 'react';
import { shallow } from 'enzyme';
import PagePurpose from '../components/PagePurpose';

describe('PagePurpose component', () => {

  const component = shallow(
    <PagePurpose />
  );

  it('should exist', () => {
    expect(component).toMatchSnapshot();
  });

});
