import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameSquareComponent } from './game-square/game-square.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameUtilService } from './game-util.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, GameSquareComponent, GameBoardComponent],
  bootstrap: [AppComponent],
  providers: [GameUtilService],
})
export class AppModule {}
