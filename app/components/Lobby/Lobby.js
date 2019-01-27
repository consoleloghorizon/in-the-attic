// @flow
import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Lobby.css';
import routes from '../../constants/routes';

type Props = {
  initGame: () => void,
  startCountdown: () => void,
  reset: () => void,
  countdown: number,
  gameCode: string,
  players: Array
};

export default class Lobby extends Component<Props> {
  props: Props;

  componentDidMount() {
    const { initGame } = this.props;
    initGame();
  }

  generatePlayersDisplay() {
    const { players } = this.props;
    const playersDisplay = _.map(players, (player) => {
      return (
        <div className={styles.players} data-tid="players" key={'players_' + player.username}>
          {player.username}{player.isVIP && '*'}
        </div>
      );
    });
    return (
      <React.Fragment>
        {playersDisplay}
      </React.Fragment>
    );
  }

  render() {
    const { startCountdown, gameCode, countdown, reset } = this.props;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.TITLE} onClick={reset}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={styles.gameCode} data-tid="gameCode">
          {gameCode}
        </div>
        <div className={`countdown ${styles.countdown}`} data-tid="countdown">
          {countdown > 0 ? countdown : ''}
        </div>
        {this.generatePlayersDisplay()}
        <div className={styles.btnGroup}>
          <button
            className={styles.btn}
            onClick={startCountdown}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-play" />
          </button>
        </div>
      </div>
    );
  }
}
