import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { moviesReducer, MovieState } from './movies.reducer';
import { recipesReducer, RecipesState } from './recipes.reducer';

export interface State {
  movies: MovieState;
  recipes: RecipesState;
}

export const reducers: ActionReducerMap<State> = {
  movies: moviesReducer,
  recipes: recipesReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
