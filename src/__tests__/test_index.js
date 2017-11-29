import React from 'react';
import { shallow } from 'enzyme';
import Register from '../components/register.js';

it('renders without crashing', () => {
  shallow(<Register />);
});
