import { createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/model/movie.model';
import { loadMoviesSuccess } from '../actions/movie.actions';

export const moviesFeatureKey = 'movies';

export interface MovieState {
  movies: Array<Movie>;
}

export const initialState: MovieState = {
  movies: [],
};

export const moviesReducer = createReducer(
  initialState,
  on(loadMoviesSuccess, (state, actions) => {
    const movies = actions.data;
    return { ...state, movies };
  })
);
