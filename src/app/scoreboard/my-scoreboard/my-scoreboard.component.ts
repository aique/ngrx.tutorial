import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { homeScore, awayScore, resetScore, setScores } from '../scoreboard.actions';
import { Game } from '../scoreboard.reducer';

@Component({
  selector: 'app-my-scoreboard',
  templateUrl: './my-scoreboard.component.html',
})
export class MyScoreboardComponent {
  game$: Observable<Game>

  constructor(private store: Store<{ game: Game }>) {
    this.game$ = store.select('game')
  }

  homeScore() {
    this.store.dispatch(homeScore())
  }

  awayScore() {
    this.store.dispatch(awayScore())
  }

  resetScore() {
    this.store.dispatch(resetScore())
  }

  setScores(event: any) {
    this.store.dispatch(setScores({
      game: {
        home: event.target.home.value,
        away: event.target.away.value
      }
    }))

    return false
  }
}