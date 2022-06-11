import { Component, VERSION } from '@angular/core';
import { GameUtilService, State } from './game-util.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  boardElements: Array<State> = [];
  winnerFound: boolean = false;

  constructor(public gameService: GameUtilService) {
    // Create basic Data required for the game
    this.gameService.createNewGame();
    // Board elements which hold an id and state
    this.boardElements = this.gameService.getBoardArray();
  }

  // Event propogated from child (user perfomed action)
  checkBoardforWinner(): void {
    if (this.gameService.checkWinner()) {
      // Winner Found, Show Winner
      this.winnerFound = true;
      alert('Winner Found');
    } else if (this.gameService.isAllSquareFilled()) {
      // All elements filled, no winner
      alert('No Winner Found');
      this.resetGameBoard();
    } else {
      // columns still available, change the current player
      this.gameService.changeCurrentPlayer();
    }
  }

  // resetButton click by User
  resetGameBoard(): void {
    this.winnerFound = false;
    this.gameService.createNewGame();
    this.boardElements = [...this.gameService.getBoardArray()];
  }
}
