// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Title from '../components/Title/Title';
import TitleActions from '../actions/title';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TitleActions, dispatch);
}

export default connect(
  undefined,
  mapDispatchToProps
)(Title);
