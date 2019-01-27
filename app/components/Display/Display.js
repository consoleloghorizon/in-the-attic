import React, { Component } from 'react';
import styles from './Display.css';
// import routes from '../../constants/routes';

type Props = {
  players: Array,
  round: number,
  phase: number,
  answers: Array
};

export default class Display extends Component<Props> {
  props: Props;

  static generatePauseDisplay() {
    return (
      <div className={styles.paused} data-tid="paused">
        Paused
      </div>
    );
  }

  static generatePlayersDisplay() {
    return (
      <div className={styles.players} data-tid="players">
        Players
      </div>
    );
  }

  static generateDescriptionDisplay() {
    return (
      <div className={styles.descriptions} data-tid="descriptions">
        Descriptions
      </div>
    );
  }

  static generateAnswersDisplay() {
    return (
      <div className={styles.answers} data-tid="answers">
        Answers
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      showPause: false,
      showAnswers: false,
      showDescription: false,
      showPlayers: false
    };
  }

  render() {
    const { players, round, phase, answers } = this.props;
    const { showPause, showAnswers, showDescription, showPlayers } = this.state;
    return (
      <div>
        {showPause && this.generatePauseDisplay()}
        {!showPause &&
          (showDescription && this.generateDescriptionDisplay(round, phase)) &&
          (showAnswers && this.generateAnswersDisplay(answers)) &&
          (showPlayers && this.generatePlayersDisplay(players))}
      </div>
    );
  }
}
