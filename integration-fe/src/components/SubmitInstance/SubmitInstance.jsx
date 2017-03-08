import React, { PropTypes, Component } from 'react';
import { hashHistory } from 'react-router';
import './styles/styles.less';

export class SubmitInstance extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.status !== nextProps.status) {
      if (nextProps.status === 'saved') {
        hashHistory.push('/');
      }
    }
  }

  render() {
    return (
      <div className='wrapper submit-container'>
        <button className='button cancel-link'>Cancel</button>
        <button className='button' onClick={() => this.props.saveInstance()}>Add</button>
      </div>
    );
  }
}

SubmitInstance.propTypes = {
  saveInstance: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default SubmitInstance;
