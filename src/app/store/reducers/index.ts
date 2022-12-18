import { RouterState } from '@angular/router';
import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { moviesReducer, MovieState } from './movies.reducer';
import { recipesReducer, RecipesState } from './recipes.reducer';

export interface State {
  movies: MovieState;
  recipes: RecipesState;
  router: RouterState;
}

export const reducers: ActionReducerMap<State> = {
  movies: moviesReducer,
  recipes: recipesReducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
