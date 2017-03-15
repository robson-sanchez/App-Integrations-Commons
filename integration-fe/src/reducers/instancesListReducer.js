/* eslint-disable no-debugger */
const instanceList = (state = { instances: [], loading: true }, action) => {
  switch (action.type) {
    case 'FETCH_INSTANCE_LIST_SUCCESS':
      debugger;
      return Object.assign({}, state, {
        ...state,
        instances: action.payload,
        loading: false,
      });
    case 'SAVE_INSTANCE_SUCCESS':
      return Object.assign({}, state, {
        ...state,
        loading: false,
        instances: [
          ...state.instances,
          action.instance,
        ],
      });
    case 'SUBMIT_DONE':
      debugger;
      return Object.assign({}, state, {
        ...state,
        loading: true,
        instances: [],
      });
    default:
      return state;
  }
};

export default instanceList;
