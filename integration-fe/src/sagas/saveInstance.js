/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import { call, put, take, select } from 'redux-saga/effects';
import {
  saveInstance as apiSaveInstance,
  addMembership,
} from './apiCalls';

export function* saveInstance() {
  let add;
  try {
    yield take('SAVE_INSTANCE');
    const state = yield select();
    const instance = state.instance;
    if (instance.streams.length > 0) {
      for (const stream in instance.streams) {
        if (instance.streams[stream]) {
          try {
            add = yield call(addMembership, instance.streams[stream]);
            // debugger;
          } catch (error) {
            yield put({ type: 'ADD_MEMBER_SHIP_FAILED', error });
          }
        }
      }
    }
    // debugger;
    if (add) {
      instance.creatorId = state.userId;
      const response = yield call(apiSaveInstance, state);
      instance.instanceId = response.instanceId;
      instance.lastPosted = response.lastModifiedDate;
      yield put({ type: 'SAVE_INSTANCE_SUCCESS', instance });
    } else {
      const error = yield select(state => state.error);
      yield put({ type: 'SAVE_INSTANCE_FAILED', error });
    }
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error });
  }
}
