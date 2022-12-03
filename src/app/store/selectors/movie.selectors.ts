import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Movie } from 'src/app/model/movie.model';
import { MovieState } from '../reducers/movies.reducer';

export const selectMoviesFeature = createFeatureSelector<MovieState>('movies');

export const selectMovies = createSelector(
  selectMoviesFeature,
  (state: MovieState) => state.movies
);
