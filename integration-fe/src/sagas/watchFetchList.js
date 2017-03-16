/* eslint-disable no-debugger */
import { takeEvery, put } from 'redux-saga/effects';
import { getInstanceList } from './getInstanceList';
import { getInstance } from './getInstance';
import { saveInstance } from './saveInstance';
import { editInstance } from './editInstance';

export function* watchFetchList() {
  try {
    yield [
      takeEvery('FETCH_INSTANCE_LIST', getInstanceList),
      takeEvery('FETCH_INSTANCE_LIST', getInstance),
      takeEvery('SAVE_INSTANCE', saveInstance),
      takeEvery('EDIT_INSTANCE', editInstance),
    ];
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error });
  }
}
