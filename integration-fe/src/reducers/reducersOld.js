/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* import { Utils } from '../js/utils.service';
import config from '../js/config.service';

import {
  FETCH_USER_ID_SUCCESS,
  FETCH_INSTANCE_LIST_SUCCESS,
  FETCH_USER_ROOMS_SUCCESS,
  EDIT_INSTANCE,
  EDIT_INSTANCE_SUCCESS,
  CREATE_INTANCE,
  CREATE_INSTANCE_SUCCESS,
  CREATE_STREAM,
  CREATE_STREAM_SUCCESS,
  SWITCH_STREAM_TYPE,
  CHANGE_INSTANCE_NAME,
  ADD_STREAM_TO_INSTANCE,
  REMOVE_STREAM_FROM_INSTANCE,
  SAVE_INSTANCE_SUCCESS,
  ERROR,
} from '../actions/actions';

const configurationId = Utils.getParameterByName('configurationId');
const appId = Utils.getParameterByName('id');
const baseUrl = `${window.location.protocol}//${window.location.hostname}/integration`;
const baseWebhookUrl = `${baseUrl}/v1/whi/${appId}/${configurationId}`;
const messages = {
  loadingInstances: 'Searching for Instances',
};

const INITIAL_STATE = {
  userId: null,
  configurationId,
  loading: true,
  error: null,
  appId,
  appName: config.app_name,
  baseWebhookUrl,
  ui: {
    instances: [],
    userRooms: [],
    optionalProperties: [],
  },
  entities: {
    instance: {
      instanceId: null,
      name: '',
      configurationId,
      creatorId: null,
      streamType: 'IM',
      lastPostedDate: null,
    },
    streams: [],
    optionalProperties: null,
    webHookURL: null,
    memberShipAdded: false,
    messages: {
      loadingInstances: 'Searching for instances...',
    },
    status: 'idle',
  },
};

const integrationApp = (state = INITIAL_STATE, action) => {
  let error;
  switch (action.type) {
    case FETCH_USER_ID_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        loading: false,
        userId: action.payload.toString(),
      });
    case FETCH_INSTANCE_LIST_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        ui: {
          ...state.ui,
          instances: state.ui.instances.concat(action.payload.slice()),
        },
        loading: false,
        error: null,
      });
    case FETCH_USER_ROOMS_SUCCESS: {
      return Object.assign({}, state, {
        ...state,
        ui: {
          ...state.ui,
          userRooms: state.ui.userRooms.concat(action.payload.slice()),
        },
        loading: false,
      });
    }
    case SWITCH_STREAM_TYPE:
      return Object.assign({}, state, {
        ...state,
        entities: {
          ...state.entities,
          instance: {
            ...state.entities.instance,
            streamType: action.payload,
          },
        },
      });
    case CHANGE_INSTANCE_NAME:
      return Object.assign({}, state, {
        ...state,
        entities: {
          ...state.entities,
          instance: {
            ...state.entities.instance,
            name: action.payload,
          },
        },
      });
    case ADD_STREAM_TO_INSTANCE:
      return Object.assign({}, state, {
        ...state,
        entities: {
          ...state.entities,
          streams: state.entities.streams.concat(action.payload),
        },
      });
    case SAVE_INSTANCE_SUCCESS:
      debugger;
      return Object.assign({}, state, {
        ...state,
        entities: {
          ...state.entities,
          messages: {
            ...state.entities.messages,
            successCreated: 'Instance Successfully Created',
          },
          status: 'saved',
        },
        loading: false,
      });
    case ERROR:
      // 2nd one is network or server down errors
      error = action.payload || { message: action.payload.message };
      return Object.assign({}, state, {
        ...state,
        instances: null,
        loading: false,
        error,
      });
    default:
      return state;
  }
};

export default integrationApp;*/
