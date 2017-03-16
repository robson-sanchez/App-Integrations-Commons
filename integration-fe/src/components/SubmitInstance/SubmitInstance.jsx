/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-debugger */
import React, { PropTypes, Component } from 'react';
import { hashHistory } from 'react-router';
import '../../styles/main.less';

export class SubmitInstance extends Component {
  constructor(props) {
    super(props);
    this.onClickEdit = this.onClickEdit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    debugger;
    if (this.props.saved !== nextProps.saved) {
      if (nextProps.saved) {
        hashHistory.push('/instance-created');
      }
    }
  }

  onClickEdit() {
    debugger;
    if (this.props.instanceId) {
      this.props.editInstance();
    } else {
      this.props.saveInstance();
    }
  }

  render() {
    return (
      <div className='submit-container'>
        <button className='button cancel-link'>Cancel</button>
        <button className='button' onClick={this.onClickEdit}>
          { this.props.instanceId ? <span>Update</span> : <span>Add</span> }
        </button>
      </div>
    );
  }
}

SubmitInstance.propTypes = {
  saveInstance: PropTypes.func.isRequired,
  editInstance: PropTypes.func.isRequired,
  saved: PropTypes.bool,
  instanceId: PropTypes.string,
};

SubmitInstance.defaultProps = {
  saved: false,
};

export default SubmitInstance;
