import React from 'react';
import { shallow } from 'enzyme';
import { Upload } from '../../../src/features/assets/Upload';

describe('assets/Upload', () => {
  it('renders node with correct class name', () => {
    const props = {
      assets: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Upload {...props} />
    );

    expect(
      renderedComponent.find('.assets-upload').length
    ).toBe(1);
  });
});
