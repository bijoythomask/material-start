import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, startWith, tap } from 'rxjs';
import { Movie } from '../model/movie.model';
import { loadMovies } from '../store/actions/movie.actions';
import { selectMovies } from '../store/selectors/movie.selectors';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<ReadonlyArray<Movie>> = this.store.select(selectMovies);

  displayedColumns: string[] = [
    'id',
    'title',
    'year',
    'director',
    'actors',
    'runtime',
  ];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadMovies());
  }
}
