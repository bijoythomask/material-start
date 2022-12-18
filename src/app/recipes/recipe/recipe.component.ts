import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, first, map, mergeMap, Observable, single, tap } from 'rxjs';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipesState } from 'src/app/store/reducers/recipes.reducer';
import {
  selectedRecipe,
  selectRecipes,
} from 'src/app/store/selectors/recipes.selectors';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipeId: number;
  recipe$: Observable<Readonly<Recipe>>;
  constructor(
    private store: Store<RecipesState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipeId = parseInt(this.route.snapshot.paramMap.get('recipeId'));
    this.recipe$ = this.store.select(selectedRecipe);
  }
}
