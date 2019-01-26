// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import styles from './Title.css';

type Props = {};

export default class Title extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>In The Attic</h2>
        <Link to={routes.LOBBY}>Start Game</Link>
      </div>
    );
  }
}
