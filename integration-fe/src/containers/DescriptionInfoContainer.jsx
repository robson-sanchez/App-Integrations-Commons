import { connect } from 'react-redux';
import DescriptionInfo from '../components/DescriptionInfo/DescriptionInfo';

const mapStateToProps = state => ({
  name: state.entities.instance.name,
});

const DescriptionInfoContainer = connect(
  mapStateToProps,
)(DescriptionInfo);

export default DescriptionInfoContainer;

