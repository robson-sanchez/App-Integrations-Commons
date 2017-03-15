/* eslint-disable no-debugger */
import { connect } from 'react-redux';
import {
  getInstanceList,
} from '../actions';

import TableInstance from '../components/TableInstance/TableInstance';

// const mapStateToProps = state => ({
//   userId: state.userId,
//   appName: state.appName,
//   rooms: state.userRooms,
//   instanceList: state.instanceList.instances,
//   loading: state.instanceList.loading,
//   baseWebHookURL: state.instance.baseWebHookURL,
// });
const mapStateToProps = (state) => {
  debugger;
  return {
    userId: state.userId,
    appName: state.appName,
    rooms: state.userRooms,
    instanceList: state.instanceList.instances,
    loading: state.instanceList.loading,
    baseWebHookURL: state.instance.baseWebHookURL,
  };
};

const mapDispatchToProps = (dispatch) => {
  debugger;
  return {
    getInstanceList: () => { dispatch(getInstanceList()); },
  };
};

const TableInstanceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableInstance);

export default TableInstanceContainer;
