/* eslint-disable no-debugger */
import { connect } from 'react-redux';
import {
  getInstanceList,
  showEditView,
} from '../actions';

import TableInstance from '../components/TableInstance/TableInstance';

const mapStateToProps = state => ({
  userId: state.userId,
  appName: state.appName,
  rooms: state.userRooms,
  instanceList: state.instanceList.instances,
  loading: state.instanceList.loading,
  baseWebHookURL: state.instance.baseWebHookURL,
});

const mapDispatchToProps = dispatch => ({
  getInstanceList: () => { dispatch(getInstanceList()); },
  // editInstance: (_instance) => { dispatch(editInstance(_instance)); },
  showEditInstanceView: (_instance) => { dispatch(showEditView(_instance)); },
});

const TableInstanceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableInstance);

export default TableInstanceContainer;
