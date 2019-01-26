// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Lobby.css';
import routes from '../../constants/routes';

type Props = {
  startCountdown: () => void,
  countdown: number
};

export default class Lobby extends Component<Props> {
  props: Props;

  render() {
    const { startCountdown, countdown } = this.props;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.TITLE}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`countdown ${styles.countdown}`} data-tid="countdown">
          {countdown > 0 ? countdown : ''}
        </div>
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
