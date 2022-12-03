import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { Movie } from 'src/app/model/movie.model';
import { MoviesService } from 'src/app/service/movies.service';
import { loadUsers, loadUsersSuccess } from '../actions/user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private movieService: MoviesService) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.movieService
          .getMovies()
          .pipe(map((movies) => loadUsersSuccess({ data: <Movie[]>movies })))
      )
    )
  );
}
