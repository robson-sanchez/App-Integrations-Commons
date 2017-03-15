/* eslint-disable no-debugger */
const instanceReducer = (state = { saved: false }, action) => {
  switch (action.type) {
    case 'GET_ACTIVE_INSTANCE':
      debugger;
      return action.instance;
    case 'CHANGE_INSTANCE_NAME':
      return Object.assign({}, state, {
        ...state,
        name: action.name,
      });
    case 'CHANGE_STREAM_TYPE':
      return Object.assign({}, state, {
        ...state,
        streamType: action.streamType,
        postingLocationRooms: [],
        streams: [],
      });
    case 'ADD_STREAM_TO_INSTANCE':
      return Object.assign({}, state, {
        ...state,
        postingLocationRooms: state.postingLocationRooms.concat([action.room]),
        streams: state.streams.concat([action.room.threadId]),
      });
    case 'REMOVE_STREAM_FROM_INSTANCE':
      return Object.assign({}, state, {
        ...state,
        postingLocationRooms: state.postingLocationRooms.filter(
          room => room.threadId !== action.room.threadId),
        streams: state.streams.filter(item => item !== action.room.threadId),
      });
    /* case 'SET_BASE_WEBHOOK_URL':
      debugger;
      return Object.assign({}, state, {
        ...state,
        baseWebhookUrl: action.url,
      });*/
    case 'SAVE_INSTANCE_SUCCESS':
      return Object.assign({}, state, {
        ...state,
        name: action.instance.name,
        creatorId: action.instance.creatorId,
        instanceId: action.instance.instanceId,
        streamType: action.instance.streamType,
        streams: action.instance.streams.slice(),
        lastPosted: action.instance.lastPosted,
        saved: true,
      });
    default:
      return state;
  }
};

export default instanceReducer;
