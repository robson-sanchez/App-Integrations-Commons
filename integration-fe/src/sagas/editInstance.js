/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import { call, put, select } from 'redux-saga/effects';
import {
  setInstance,
  addMembership,
  editInstance as callEditInstance,
} from './apiCalls';

export function* editInstance() {
  try {
    const state = yield select();
    const edited = yield call(setInstance, state.instance);
    let update;
    if (state.instance.streamType === 'CHATROOM') {
      if (state.instance.streams.length > 0) {
        for (const stream in state.instance.streams) {
          if (state.instance.streams[stream]) {
            try {
              update = yield call(addMembership, state.instance.streams[stream]);
            } catch (error) {
              yield put({ type: 'ADD_MEMBER_SHIP_FAILED', error });
            }
          }
        }
      }
    }
    yield call(callEditInstance, state);
    debugger;
    yield put({ type: 'UPDATE_INSTANCE_SUCCESS' });
  } catch (error) {
    debugger;
    yield put({ type: 'FETCH_FAILED', error });
  }
}
