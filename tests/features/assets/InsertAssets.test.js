import React from 'react';
import { shallow } from 'enzyme';
import { InsertAssets } from '../../../src/features/assets/InsertAssets';

describe('assets/InsertAssets', () => {
  it('renders node with correct class name', () => {
    const props = {
      assets: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <InsertAssets {...props} />
    );

    expect(
      renderedComponent.find('.assets-insert-assets').length
    ).toBe(1);
  });
});
