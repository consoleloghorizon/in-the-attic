import openSocket from 'socket.io-client';
import { SERVER_URL } from '../constants/config';

export default class Socket {
  constructor(gamecode) {
    this.socket = openSocket(SERVER_URL);
    this.socket.emit('add host', { gameCode: gamecode });
  }

  joinGame(callback) {
    this.socket.on('player joined game', data => {
      callback(data);
    });
  }

  gameIsStarting(callback) {
    this.socket.on('game-status', data => {
      callback(data);
    });
  }

  subscribeToPhaseChange = (callback) => {
      this.socket.on('phase over', data => {
          console.log('phase game data', data);
          callback(data);
      });
  };

  sendGameOver = () => {
    this.socket.emit('phase over', 'finshed');
  };
}
