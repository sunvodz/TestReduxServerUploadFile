import React from 'react';
import { shallow } from 'enzyme';
import { Dropzone } from '../../../src/features/assets/Dropzone';

describe('assets/Dropzone', () => {
  it('renders node with correct class name', () => {
    const props = {
      assets: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Dropzone {...props} />
    );

    expect(
      renderedComponent.find('.assets-dropzone').length
    ).toBe(1);
  });
});
