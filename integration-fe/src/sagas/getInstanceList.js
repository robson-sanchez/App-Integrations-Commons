/* eslint-disable no-debugger */
import { call, put, take } from 'redux-saga/effects';
import { getList } from './apiCalls';

export function* getInstanceList() {
  try {
    debugger;
    yield take('FETCH_INSTANCE_LIST');
    debugger;
    const instances = yield call(getList);
    yield put({ type: 'FETCH_INSTANCE_LIST_SUCCESS', payload: instances });
  } catch (error) {
    debugger;
    console.error(error.message);
    yield put({ type: 'FETCH_FAILED', error });
  }
}
