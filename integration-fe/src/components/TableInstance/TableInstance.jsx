/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
import React, { Component, PropTypes } from 'react';
import DataRow from './DataRow';
import Spinner from '../../containers/SpinnerContainer';
import '../../styles/main.less';
import './styles/styles.less';

class TableInstance extends Component {
  componentDidMount() {
    this.props.fetchInstanceList();
  }

  render() {
    return (
      <div>
        <Spinner />
        <div className='wrapper table-instance'>
          <table className={this.props.loading ? 'instances' : 'instances table-opacity-1'}>
            <thead>
              <tr>
                <th><span>Description</span></th>
                <th><span>Active in</span></th>
                <th><span>Webhook URL</span></th>
                <th><span>Last Posted</span></th>
                <th><span>Actions</span></th>
              </tr>
            </thead>
            <tbody>
              {this.props.instanceList.map((item, index) => {
                const _instance = {
                  name: item.name,
                  appName: this.props.appName,
                  streamType: item.streamType,
                  instanceId: item.instanceId,
                  baseWebhookUrl: this.props.baseWebhookUrl,
                  postingLocationRooms: item.postingLocationRooms,
                  lastPosted: item.lastPosted,
                };
                return <DataRow instance={_instance} key={index} id={index} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

TableInstance.propTypes = {
  fetchInstanceList: PropTypes.func.isRequired,
  instanceList: PropTypes.arrayOf(PropTypes.object).isRequired,
  appName: PropTypes.string.isRequired,
  baseWebhookUrl: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default TableInstance;
