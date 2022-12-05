import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private db: AngularFireDatabase) {}

  getMovies() {
    return this.db.object('movies/movies').valueChanges();
  }
}
