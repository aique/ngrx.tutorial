import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';
import { MyCounterComponent } from './counter/my-counter/my-counter.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { scoreboardReducer } from './scoreboard/scoreboard.reducer';
import { MyScoreboardComponent } from './scoreboard/my-scoreboard/my-scoreboard.component';
import { moviesReducer } from './movies/movies.reducer';
import { MoviesPageComponent } from './movies/movies-page/movies-page.component';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './movies/movies.effects';
import { MoviesService } from './movies/movies.service';

@NgModule({
  imports: [
    BrowserModule,
    EffectsModule.forRoot(
      MoviesEffects
    ),
    StoreModule.forRoot({
      count: counterReducer,
      game: scoreboardReducer,
      movies: moviesReducer
    }),
  ],
  providers: [
    MoviesService
  ],
  declarations: [
    AppComponent,
    MyCounterComponent,
    LoginPageComponent,
    MyScoreboardComponent,
    MoviesPageComponent
  ],
  bootstrap: [
    AppComponent
  ],
})

export class AppModule {}