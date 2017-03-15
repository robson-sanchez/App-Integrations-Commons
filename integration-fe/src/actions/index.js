/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */

export const changeInstanceName = name => ({
  type: 'CHANGE_INSTANCE_NAME',
  name,
});

export const changeStreamType = streamType => ({
  type: 'CHANGE_STREAM_TYPE',
  streamType,
});

export const addStreamToInstance = room => ({
  type: 'ADD_STREAM_TO_INSTANCE',
  room,
});

export const removeStreamFromInstance = room => ({
  type: 'REMOVE_STREAM_FROM_INSTANCE',
  room,
});

export const saveInstance = () => ({
  type: 'SAVE_INSTANCE',
});

export const submitDone = () => ({
  type: 'SUBMIT_DONE',
});

// export const getInstanceList = () => ({
//   type: 'FETCH_INSTANCE_LIST',
// });
export const getInstanceList = () => {
  debugger;
  return {
    type: 'FETCH_INSTANCE_LIST',
  };
};
