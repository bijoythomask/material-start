import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadRecipess } from '../store/actions/recipes.actions';

@Component({
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadRecipess());
  }
}
