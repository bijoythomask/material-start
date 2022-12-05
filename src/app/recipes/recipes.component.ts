import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipe.model';
import { loadRecipess } from '../store/actions/recipes.actions';
import { RecipesState } from '../store/reducers/recipes.reducer';
import { selectRecipes } from '../store/selectors/recipes.selectors';

@Component({
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes$: Observable<ReadonlyArray<Recipe>> =
    this.store.select(selectRecipes);

  constructor(private store: Store<RecipesState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadRecipess());
  }
}
