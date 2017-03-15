/* eslint-disable no-debugger */
import React, { PropTypes, Component } from 'react';
import { hashHistory } from 'react-router';
import '../../styles/main.less';

export class SubmitInstance extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.saved !== nextProps.saved) {
      if (nextProps.saved) {
        debugger;
        hashHistory.push('/instance-created');
      }
    }
  }

  render() {
    return (
      <div className='submit-container'>
        <button className='button cancel-link'>Cancel</button>
        <button className='button' onClick={() => this.props.saveInstance()}>Add</button>
      </div>
    );
  }
}

SubmitInstance.propTypes = {
  saveInstance: PropTypes.func.isRequired,
  saved: PropTypes.bool,
};

SubmitInstance.defaultProps = {
  saved: false,
};

export default SubmitInstance;
