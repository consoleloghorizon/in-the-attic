import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Lobby from '../components/Lobby';
import * as LobbyActions from '../actions/lobby';

function mapStateToProps(state) {
  return {
    countdown: state.countdown
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LobbyActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby);
