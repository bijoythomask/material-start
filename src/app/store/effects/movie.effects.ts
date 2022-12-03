import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { MoviesService } from 'src/app/service/movies.service';
import { loadMovies, loadMoviesSuccess } from '../actions/movie.actions';

@Injectable()
export class MovieEffects {
  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}

  $loadUsers = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovies),
      mergeMap(() =>
        this.moviesService
          .getMovies()
          .pipe(map((movies) => loadMoviesSuccess({ data: movies })))
      )
    )
  );
}
