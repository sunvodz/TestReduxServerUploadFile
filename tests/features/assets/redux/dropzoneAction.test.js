import {
  ASSETS_DROPZONE_ACTION,
} from '../../../../src/features/assets/redux/constants';

import {
  dropzoneAction,
  reducer,
} from '../../../../src/features/assets/redux/dropzoneAction';

describe('assets/redux/dropzoneAction', () => {
  it('returns correct action by dropzoneAction', () => {
    expect(dropzoneAction()).toHaveProperty('type', ASSETS_DROPZONE_ACTION);
  });

  it('handles action type ASSETS_DROPZONE_ACTION correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ASSETS_DROPZONE_ACTION }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
