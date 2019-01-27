// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Display from '../components/Display/Display';
// import * as DisplayActions from '../actions/display';

function mapStateToProps(state) {
  return {
    players: state.game.players,
    round: state.game.rounds,
    phase: state.game.phase,
    answers: state.game.answers
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(DisplayActions, dispatch);
// }

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Display);
