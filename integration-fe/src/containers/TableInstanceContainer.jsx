/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import {
  fetchUserId,
  fetchUserIdSuccess,
  fetchInstanceList,
  fetchInstanceListSuccess,
  fetchUserRooms,
  fetchUserRoomsSuccess,
  setError,
} from '../actions/actions';
import TableInstance from '../components/TableInstance/TableInstance';

const mapStateToProps = state => ({
  instanceList: state.ui.instances,
  baseWebhookUrl: state.baseWebhookUrl,
  appName: state.appName,
  loading: state.loading,
  memberShipAdded: state.memberShipAdded,
  counter: state.entities.counter,
});

const mapDispatchToProps = dispatch => (
  {
    fetchInstanceList: () => {
      dispatch(fetchUserId());
      dispatch(fetchUserRooms());
      dispatch(fetchInstanceList());
    },
  }
);

const TableInstanceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableInstance);

export default TableInstanceContainer;
