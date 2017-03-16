/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import { call, put, take, select } from 'redux-saga/effects';
import {
  saveInstance as apiSaveInstance,
  addMembership,
  createIM,
} from './apiCalls';

export function* saveInstance() {
  let add,
    imStream;
  try {
    // yield take('SAVE_INSTANCE');
    const state = yield select();
    const instance = state.instance;
    // debugger;
    if (instance.streamType === 'IM') {
      try {
        imStream = yield call(createIM);
        // debugger;
        instance.streams.push(imStream.id);
      } catch (error) {
        // debugger;
        yield put({ type: 'CREATE_IM_FAILED', error });
      }
    } else if (instance.streamType === 'CHATROOM') {
      if (instance.streams.length > 0) {
        for (const stream in instance.streams) {
          if (instance.streams[stream]) {
            try {
              add = yield call(addMembership, instance.streams[stream]);
            } catch (error) {
              yield put({ type: 'ADD_MEMBER_SHIP_FAILED', error });
            }
          }
        }
      }
    }
    instance.creatorId = state.userId;
    const response = yield call(apiSaveInstance, state);
    instance.instanceId = response.instanceId;
    instance.lastPosted = response.lastModifiedDate;
    yield put({ type: 'SAVE_INSTANCE_SUCCESS', instance });
  } catch (error) {
    // debugger;
    yield put({ type: 'FETCH_FAILED', error });
  }
}
