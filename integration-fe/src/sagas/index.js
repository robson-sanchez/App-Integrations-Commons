import { fork } from 'redux-saga/effects';
import { getUserId } from './getUserId';
import { getRooms } from './getRooms';
import { getAppName } from './getAppName';
import { watchfier } from './watchfier';

function* rootSaga() {
  yield [
    fork(getAppName),
    fork(getUserId),
    fork(getRooms),
    fork(watchfier),
  ];
}

export default rootSaga;
