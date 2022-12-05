import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipesState } from 'src/app/store/reducers/recipes.reducer';
import { selectedRecipe } from 'src/app/store/selectors/recipes.selectors';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipe$: Observable<Recipe> = this.store.select(selectedRecipe);

  constructor(private store: Store<RecipesState>) {}

  ngOnInit(): void {}
}
