import React from 'react';
import { shallow } from 'enzyme';
import { Progress } from '../../../src/features/assets';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Progress />);
  expect(renderedComponent.find('.assets-progress').length).toBe(1);
});
