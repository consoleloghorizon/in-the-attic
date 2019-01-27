import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Lobby from '../components/Lobby/Lobby';
import * as LobbyActions from '../actions/lobby';

function mapStateToProps(state) {
  return {
    countdown: state.game.countdown,
    gameCode: state.game.gameCode
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LobbyActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby);
