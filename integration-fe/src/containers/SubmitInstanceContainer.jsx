/* eslint-disable no-debugger */
import { connect } from 'react-redux';
import {
  saveInstance,
  editInstance,
} from '../actions';
import SubmitInstance from '../components/SubmitInstance/SubmitInstance';

let store = {};

const mapStateToProps = (state) => {
  store = Object.assign({}, state.instance);
  return {
    saved: state.instance.saved,
    instanceId: state.instance.instanceId,
  };
};

const mapDispatchToProps = dispatch => ({
  saveInstance: () => { dispatch(saveInstance(store)); },
  editInstance: () => { dispatch(editInstance(store)); },
});

const SubmitInstanceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubmitInstance);

export default SubmitInstanceContainer;
