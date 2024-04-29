import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { load } from '../movies.actions';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
})
export class MoviesPageComponent {
  movies$: Observable<string[]>
  
  constructor(private store: Store<{ movies: string[] }>) {
    this.movies$ = store.select('movies')
  }

  ngOnInit() {
    this.store.dispatch(load());
  }
}