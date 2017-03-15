/* eslint-disable no-debugger */
import { connect } from 'react-redux';
import {
  saveInstance,
} from '../actions';
import SubmitInstance from '../components/SubmitInstance/SubmitInstance';

let store = {};

const mapStateToProps = (state) => {
  store = Object.assign({}, state.instance);
  return {
    saved: state.instance.saved,
  };
};

const mapDispatchToProps = dispatch => ({
  saveInstance: () => { dispatch(saveInstance(store)); },
});
// const mapDispatchToProps = (dispatch) => {
//   debugger;
//   return {
//     saveInstance: () => { dispatch(saveInstance(store)); },
//   };
// };

const SubmitInstanceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubmitInstance);

export default SubmitInstanceContainer;
