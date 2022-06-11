import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { State } from '../game-util.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
})
export class GameBoardComponent {
  @Input() boardElements: Array<State>;
  @Output() eventClickedOnBoard = new EventEmitter();

  userClickSquare() {
    this.eventClickedOnBoard.emit();
  }
}
