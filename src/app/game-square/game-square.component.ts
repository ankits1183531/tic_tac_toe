import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameUtilService, State } from '../game-util.service';

@Component({
  selector: 'app-game-square',
  templateUrl: './game-square.component.html',
  styleUrls: ['./game-square.component.css'],
})
export class GameSquareComponent {
  @Input() square: State;
  @Output() userClickSquare = new EventEmitter();

  constructor(private gameService: GameUtilService) {}

  // User clicks over the square
  // Set the value of square
  // Emit event to parent for checks

  onSquareClick() {
    if (this.square.state == null && this.gameService.isWinnerFound == false) {
      this.square.state = this.gameService.getCurrentPlayer();
      this.userClickSquare.emit();
    }
  }
}
