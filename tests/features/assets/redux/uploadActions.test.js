import {
  ASSETS_UPLOAD_ACTIONS,
} from '../../../../src/features/assets/redux/constants';

import {
  uploadActions,
  reducer,
} from '../../../../src/features/assets/redux/uploadActions';

describe('assets/redux/uploadActions', () => {
  it('returns correct action by uploadActions', () => {
    expect(uploadActions()).toHaveProperty('type', ASSETS_UPLOAD_ACTIONS);
  });

  it('handles action type ASSETS_UPLOAD_ACTIONS correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ASSETS_UPLOAD_ACTIONS }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
