/* eslint-disable no-debugger */
import { connect } from 'react-redux';
import {
  fetchUserRooms,
  fetchUserRoomsSuccess,
  addStreamToInstance,
  removeStreamFromInstance,
  setError,
} from '../../../actions/actions';

import SuggestionsRooms from './SuggestionsRooms';

const mapStateToProps = state => ({
  userRooms: state.ui.userRooms,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchUserRooms: () => {
    dispatch(fetchUserRooms()).then((rooms) => {
      dispatch(fetchUserRoomsSuccess(rooms));
    }, (error) => {
      setError(error);
    });
  },
  addStreamToInstance: (stream) => { dispatch(addStreamToInstance(stream)); },
  removeStreamFromInstance: (stream) => { dispatch(removeStreamFromInstance(stream)); },
});

const SuggestionsRoomsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuggestionsRooms);

export default SuggestionsRoomsContainer;
