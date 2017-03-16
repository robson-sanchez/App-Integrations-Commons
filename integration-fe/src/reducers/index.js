import { combineReducers } from 'redux';
import userId from './userReducer';
import instanceList from './instancesListReducer';
import userRooms from './roomsReducer';
import appName from './appNameReducer';
import instance from './instanceReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
  appName,
  userId,
  userRooms,
  instanceList,
  instance,
  error,
});

export default rootReducer;
