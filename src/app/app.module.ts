import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';
import { MyCounterComponent } from './counter/my-counter/my-counter.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { scoreboardReducer } from './scoreboard/scoreboard.reducer';
import { MyScoreboardComponent } from './scoreboard/my-scoreboard/my-scoreboard.component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      count: counterReducer,
      game: scoreboardReducer
    }),
  ],
  declarations: [AppComponent, MyCounterComponent, LoginPageComponent, MyScoreboardComponent],
  bootstrap: [AppComponent],
})

export class AppModule {}