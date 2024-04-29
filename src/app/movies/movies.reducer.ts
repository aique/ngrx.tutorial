import { createReducer, on } from '@ngrx/store';
import { loadError, loadSuccess } from './movies.actions';

export const initialState = []

export const moviesReducer = createReducer(
  initialState,
  on(loadSuccess, (state, { movies }) => movies),
  on(loadError, (state) => initialState)
);