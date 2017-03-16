import { fork } from 'redux-saga/effects';
import { getUserId } from './getUserId';
import { getRooms } from './getRooms';
import { getAppName } from './getAppName';
import { watchFetchList } from './watchFetchList';

function* rootSaga() {
  yield [
    fork(getAppName),
    fork(getUserId),
    fork(getRooms),
    fork(watchFetchList),
  ];
}

export default rootSaga;
