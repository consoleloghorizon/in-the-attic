// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import styles from './Title.css';

type Props = {
  initGame: () => void
};

export default class Title extends Component<Props> {
  props: Props;

  render() {
    const { initGame } = this.props;
    return (
      <div className={styles.container} data-tid="container">
        <h2>In The Attic</h2>
        <Link to={routes.LOBBY} onClick={initGame}>
          Start Game
        </Link>
      </div>
    );
  }
}
