/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable max-len */
import { connect } from 'react-redux';
import {
  fetchUserId,
  fetchUserIdSuccess,
  createStream,
  createInstance,
  createInstanceSuccess,
  addRoomMemberShip,
  addRoomMemberShipSuccess,
  saveInstance,
  saveInstanceSuccess,
  setError,
  getPokemon,
} from '../actions/actions';
import SubmitInstance from '../components/SubmitInstance/SubmitInstance';

let store = {};

const mapStateToProps = (state) => {
  store = Object.assign({}, state);
  return {
    status: state.entities.status,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    saveInstance: () => { dispatch(saveInstance(store.entities.streams)); },
  });

const SubmitInstanceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubmitInstance);

export default SubmitInstanceContainer;
