import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  ASSETS_SEND_REQUEST_BEGIN,
  ASSETS_SEND_REQUEST_SUCCESS,
  ASSETS_SEND_REQUEST_FAILURE,
  ASSETS_SEND_REQUEST_DISMISS_ERROR,
} from '../../../../src/features/assets/redux/constants';

import {
  sendRequest,
  dismissSendRequestError,
  reducer,
} from '../../../../src/features/assets/redux/sendRequest';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('assets/redux/sendRequest', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when sendRequest succeeds', () => {
    const store = mockStore({});

    return store.dispatch(sendRequest())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', ASSETS_SEND_REQUEST_BEGIN);
        expect(actions[1]).toHaveProperty('type', ASSETS_SEND_REQUEST_SUCCESS);
      });
  });

  it('dispatches failure action when sendRequest fails', () => {
    const store = mockStore({});

    return store.dispatch(sendRequest({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', ASSETS_SEND_REQUEST_BEGIN);
        expect(actions[1]).toHaveProperty('type', ASSETS_SEND_REQUEST_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissSendRequestError', () => {
    const expectedAction = {
      type: ASSETS_SEND_REQUEST_DISMISS_ERROR,
    };
    expect(dismissSendRequestError()).toEqual(expectedAction);
  });

  it('handles action type ASSETS_SEND_REQUEST_BEGIN correctly', () => {
    const prevState = { sendRequestPending: false };
    const state = reducer(
      prevState,
      { type: ASSETS_SEND_REQUEST_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.sendRequestPending).toBe(true);
  });

  it('handles action type ASSETS_SEND_REQUEST_SUCCESS correctly', () => {
    const prevState = { sendRequestPending: true };
    const state = reducer(
      prevState,
      { type: ASSETS_SEND_REQUEST_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.sendRequestPending).toBe(false);
  });

  it('handles action type ASSETS_SEND_REQUEST_FAILURE correctly', () => {
    const prevState = { sendRequestPending: true };
    const state = reducer(
      prevState,
      { type: ASSETS_SEND_REQUEST_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.sendRequestPending).toBe(false);
    expect(state.sendRequestError).toEqual(expect.anything());
  });

  it('handles action type ASSETS_SEND_REQUEST_DISMISS_ERROR correctly', () => {
    const prevState = { sendRequestError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: ASSETS_SEND_REQUEST_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.sendRequestError).toBe(null);
  });
});

