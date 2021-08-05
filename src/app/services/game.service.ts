import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class GameService {

  gameStarted = false;

  @Output() newGame: EventEmitter<boolean> = new EventEmitter();

  start() {
    console.info('Game Started');
    this.gameStarted = true;
    this.newGame.emit(this.gameStarted);
  }

  stop() {
    console.info('Game Stopped');
    this.gameStarted = false;
    this.newGame.emit(this.gameStarted);
  }

}