/* eslint-disable no-debugger */
import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import {
  changeInstanceName,
} from '../../actions';
import './styles/styles.less';

class InputDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
    };
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(e) {
    if (e !== '') {
      this.setState({
        filled: true,
      });
    } else {
      this.setState({
        filled: false,
      });
    }
    this.props.handleChange(e);
  }

  render() {
    return (
      <div className='wrapper input-description'>
        <header>
          <h2>
            <label htmlFor='input-description'>Description</label>
          </h2>
        </header>
        <div>
          <input
            type="text"
            className="text-input"
            id="input-description"
            placeholder="Add a short description here"
            onChange={(e) => { this.onChangeText(e.target.value); }}
            defaultValue={this.props.name}
            autoFocus
          />
          {
            !this.state.filled &&
              <span>
                <i className="fa fa-asterisk" aria-hidden="true" />
              </span>
          }
        </div>
      </div>
    );
  }
}

InputDescription.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: state.instance.name,
});

const mapDispatchToProps = dispatch => ({
  handleChange: value => dispatch(changeInstanceName(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputDescription);
