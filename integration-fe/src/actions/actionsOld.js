/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable max-len */
// import { Utils } from '../js/utils.service';

// export const FETCH_USER_ID_SUCCESS = 'FETCH_USER_ID_SUCCESS';
// export const FETCH_INSTANCE_LIST = 'FETCH_INSTANCE_LIST';
// export const FETCH_INSTANCE_LIST_SUCCESS = 'FETCH_INSTANCE_LIST_SUCCESS';
// export const FETCH_USER_ROOMS_SUCCESS = 'FETCH_USER_ROOMS_SUCCESS';
// export const SWITCH_STREAM_TYPE = 'SWITCH_STREAM_TYPE';
// export const ADD_STREAM_TO_INSTANCE = 'ADD_STREAM_TO_INSTANCE';
// export const ADD_ROOM_MEMBER_SHIP = 'ADD_ROOM_MEMBER_SHIP';
// export const SAVE_INSTANCE_SUCCESS = 'SAVE_INSTANCE_SUCCESS';
// export const CHANGE_INSTANCE_NAME = 'CHANGE_INSTANCE_NAME';
// export const ERROR = 'ERROR';

// const configurationId = Utils.getParameterByName('configurationId');
// const botUserId = Utils.getParameterByName('botUserId');

// function setError(error) {
//   debugger;
//   return {
//     type: ERROR,
//     payload: error,
//   };
// }

// export function fetchUserIdSuccess(user) {
//   return {
//     type: FETCH_USER_ID_SUCCESS,
//     payload: user,
//   };
// }

// export function fetchUserId() {
//   const extendedUserService = SYMPHONY.services.subscribe('extended-user-service');
//   const promisedUserId = extendedUserService.getUserId();
//   return (dispatch) => {
//     Promise.resolve(promisedUserId)
//     .then((response) => {
//       dispatch(fetchUserIdSuccess(response));
//     }, (err) => {
//       dispatch(setError(err));
//     });
//   };
// }

// export function fetchInstanceListSuccess(instanceList) {
//   const response = Utils.normalizeInstanceList(instanceList);
//   return {
//     type: FETCH_INSTANCE_LIST_SUCCESS,
//     payload: response,
//   };
// }

// export function fetchInstanceList() {
//   const integrationConfService = SYMPHONY.services.subscribe('integration-config');
//   const promisedInstanceList = integrationConfService.getConfigurationInstanceList(configurationId);
//   return (dispatch) => {
//     Promise.resolve(promisedInstanceList)
//     .then((response) => {
//       dispatch(fetchInstanceListSuccess(response));
//     }, (err) => {
//       dispatch(setError(err));
//     });
//   };
// }

// export function fetchUserRoomsSuccess(userRooms) {
//   const response = Utils.getUserRooms(userRooms);
//   return {
//     type: FETCH_USER_ROOMS_SUCCESS,
//     payload: response,
//   };
// }

// export function fetchUserRooms() {
//   const extendedUserService = SYMPHONY.services.subscribe('extended-user-service');
//   const promisedRooms = extendedUserService.getRooms();
//   return (dispatch) => {
//     Promise.resolve(promisedRooms)
//     .then((response) => {
//       dispatch(fetchUserRoomsSuccess(response));
//     }, (err) => {
//       dispatch(setError(err));
//     });
//   };
// }

// export function switchStreamType(streamType) {
//   return {
//     type: SWITCH_STREAM_TYPE,
//     payload: streamType,
//   };
// }

// export function changeInstanceName(name) {
//   return {
//     type: CHANGE_INSTANCE_NAME,
//     payload: name,
//   };
// }

// export function saveInstance(streams) {
//   debugger;
//   // for each stream, add membership
//   const promises = [];
//   const streamService = SYMPHONY.services.subscribe('stream-service');
//   for (const stream in streams) {
//     if (streams[stream]) {
//       promises.push(streamService.addRoomMembership(streams[stream], botUserId));
//     }
//   }

//   return (dispatch, getState) => {
//     Promise.all(promises).then((values) => {
//       const state = getState();
//       // build Optional Properties
//       let opStreams = '';
//       state.entities.streams.map((stream, idx) => {
//         if (idx === 0) {
//           opStreams += `"${stream}"`;
//         } else {
//           opStreams += `, "${stream}"`;
//         }
//       });
//       const optionalProperties = `{"owner": "${state.userId}", "streams": [${opStreams}], "streamType": "${state.entities.instance.streamType}"}`;
//       // build payload
//       const payload = {
//         configurationId: state.configurationId,
//         name: state.entities.instance.name,
//         creatorId: state.userId,
//         optionalProperties,
//       };
//       // save the instance
//       const integrationConfigService = SYMPHONY.services.subscribe('integration-config');
//       const promisedInstance = integrationConfigService.createConfigurationInstance(
//          configurationId, payload);

//       // promisedInstance().then((data) => {
//       //   dispatch({ type: SAVE_INSTANCE_SUCCESS });
//       // }, (err) => {
//       //   dispatch(setError(err));
//       // });
//     }, (err) => {
//       dispatch(setError(err));
//     });
//   };
// }

// export function addStreamToInstance(stream) {
//   return {
//     type: ADD_STREAM_TO_INSTANCE,
//     payload: stream,
//   };
// }
