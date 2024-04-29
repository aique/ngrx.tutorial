import { createAction, props } from '@ngrx/store';

export const load = createAction('[Movies Page] Load Movies');
export const loadSuccess = createAction('[Movies API] Movies Loaded Success', props<{movies: string[]}>());
export const loadError = createAction('[Movies API] Movies Loaded Error');