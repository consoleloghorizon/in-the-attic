// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Title from '../components/Title/Title';
import * as TitleActions from '../actions/title';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TitleActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Title);
