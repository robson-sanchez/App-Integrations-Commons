import {
  SET_APP_NAME,
} from '../actions';

const appName = (state = '', action) => {
  switch (action.type) {
    case SET_APP_NAME:
      return action.payload;
    default:
      return state;
  }
};

export default appName;
