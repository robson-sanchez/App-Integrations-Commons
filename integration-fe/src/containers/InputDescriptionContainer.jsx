import { connect } from 'react-redux';
import {
  changeInstanceName,
} from '../actions/actions';
import InputDescription from '../components/InputDescription/InputDescription';

const mapStateToProps = state => ({
  name: state.entities.instance.name,
});

const mapDispatchToProps = dispatch => ({
  handleChange: (value) => { dispatch(changeInstanceName(value)); },
});

const InputDescriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputDescription);

export default InputDescriptionContainer;
