// import $ from 'jquery';
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import { Utils } from '../js/utils.service';


const configurationId = Utils.getParameterByName('configurationId');
const botUserId = Utils.getParameterByName('botUserId');
const appName = Utils.getParameterByName('id');
const baseUrl = `${window.location.protocol}//${window.location.hostname}/integration`;
const baseWebHookURL = `${baseUrl}/v1/whi/${appName}/${configurationId}`;

export const getAppName = () => appName;

// export const getBaseWebHookURL = () => baseWebHookURL;

export const getInstance = () => ({
  instanceId: null,
  name: '',
  configurationId,
  creatorId: null,
  streamType: 'IM',
  lastPosted: null,
  baseWebHookURL,
  postingLocationRooms: [],
  streams: [],
});

export const getUserId = () => {
  const extendedUserService = SYMPHONY.services.subscribe('extended-user-service');
  return extendedUserService.getUserId().then(data => data);
};

export const getRooms = () => {
  const extendedUserService = SYMPHONY.services.subscribe('extended-user-service');
  return extendedUserService.getRooms().then(data => Utils.getUserRooms(data));
};

export const getList = () => {
  const integrationConfService = SYMPHONY.services.subscribe('integration-config');
  return integrationConfService.getConfigurationInstanceList(configurationId)
  .then(data => Utils.normalizeInstanceList(data));
};

export const addMembership = (stream) => {
  const streamService = SYMPHONY.services.subscribe('stream-service');
  streamService.addRoomMembership(stream, botUserId);
  return { message: 'ok' };
};

export const saveInstance = (state) => {
  // build Optional Properties
  let opStreams = '';
  state.instance.streams.map((stream, idx) => {
    if (idx === 0) {
      opStreams += `"${stream}"`;
    } else {
      opStreams += `, "${stream}"`;
    }
  });
  const optionalProperties = `{"owner": "${state.userId}", "streams": [${opStreams}], "streamType": "${state.instance.streamType}"}`;
  // build payload
  const payload = {
    configurationId,
    name: state.instance.name,
    creatorId: state.userId,
    optionalProperties,
  };
  // save the instance
  const integrationConfigService = SYMPHONY.services.subscribe('integration-config');
  return integrationConfigService.createConfigurationInstance(configurationId, payload);
};
