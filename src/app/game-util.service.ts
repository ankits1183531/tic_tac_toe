import { Injectable } from '@angular/core';

@Injectable()
export class GameUtilService {
  boardArray: Array<State> = [];
  currentPlayer = 'X';
  isWinnerFound = false;

  constructor() {}

  // getter for board Elements
  getBoardArray(): Array<State> {
    return this.boardArray;
  }

  // New game creation
  createNewGame(): void {
    this.currentPlayer = 'X';
    this.isWinnerFound = false;
    this.boardArray = this.createBoardArray();
  }

  createBoardArray(): Array<State> {
    let board = [];
    for (let i = 0; i < 9; i++) {
      board.push({ id: i, state: null });
    }
    return board;
  }

  // Get the name of Player
  getCurrentPlayer(): string {
    return this.currentPlayer;
  }

  // Change current player
  changeCurrentPlayer(): void {
    this.currentPlayer = this.currentPlayer == 'X' ? 'Y' : 'X';
  }

  // this fn checks for winner 
  checkWinner(): boolean {
    if (this.isRowsWinnerFound() || this.isDiagonalWinnerFound() || this.isColumnWinnerFound()) {
      this.isWinnerFound = true;
      return true;
    }
  }

  // Rows winner check
  isRowsWinnerFound(): boolean {
    for (let i = 0; i < 7; i += 3) {
      let firstSquare = this.boardArray[i].state,
        secondSquare = this.boardArray[i + 1].state,
        thirdSquare = this.boardArray[i + 1 * 2].state;

      if (firstSquare && secondSquare && thirdSquare) {
        if (firstSquare === secondSquare && secondSquare === thirdSquare)
          return true;
      }
    }
    return false;
  }

  // column winner check
  isColumnWinnerFound(): boolean {
    for (let i = 0; i < 3; i += 1) {
      let firstSquare = this.boardArray[i].state,
        secondSquare = this.boardArray[i + 3].state,
        thirdSquare = this.boardArray[i + 3 * 2].state;

      if (firstSquare && secondSquare && thirdSquare) {
        if (firstSquare === secondSquare && secondSquare === thirdSquare)
          return true;
      }
    }
    return false;
  }

  // diagonal winner check
  isDiagonalWinnerFound(): boolean {
    const midElement = this.boardArray[4].state;
    for (let i = 0; i <= 2; i += 2) {
      let upperCorner = this.boardArray[i].state,
        lowerCorner = this.boardArray[8 - i].state;

      if (midElement && upperCorner && lowerCorner) {
        if (midElement === upperCorner && upperCorner === lowerCorner)
          return true;
      }
    }
    return false;
  }

  // Race condition if all square filled and still winner is not founc
  isAllSquareFilled(): boolean {
    const filled = this.boardArray.filter((el: State) => el.state != null);
    return filled.length == this.boardArray.length ? true : false;
  }
}

export interface State {
  id: number;
  state: string | null;
}
