import { connect } from 'react-redux';
import {
  addStreamToInstance,
  removeStreamFromInstance,
} from '../../../actions/';

import SuggestionsRooms from './SuggestionsRooms';

const mapStateToProps = state => ({
  userRooms: state.userRooms,
});

const mapDispatchToProps = dispatch => ({
  addStreamToInstance: (room) => { dispatch(addStreamToInstance(room)); },
  removeStreamFromInstance: (room) => { dispatch(removeStreamFromInstance(room)); },
});

const SuggestionsRoomsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuggestionsRooms);

export default SuggestionsRoomsContainer;
