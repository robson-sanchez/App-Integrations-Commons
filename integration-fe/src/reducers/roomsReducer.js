import {
  FETCH_ROOMS_SUCCESS,
} from '../actions';

const userRooms = (state = [], action) => {
  switch (action.type) {
    case FETCH_ROOMS_SUCCESS:
      return action.payload.slice();
    default:
      return state;
  }
};

export default userRooms;
