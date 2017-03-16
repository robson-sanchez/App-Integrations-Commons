/* eslint-disable no-debugger */
const appError = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_FAILED':
      // debugger;
      return action.error;
    case 'SAVE_INSTANCE_FAILED':
    case 'ADD_MEMBER_SHIP_FAILED':
    case 'CREATE_IM_FAILED':
      // debugger;
      return action.error;
    default:
      return state;
  }
};

export default appError;
