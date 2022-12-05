import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Recipe } from 'src/app/model/recipe.model';
import { RecipesState } from '../reducers/recipes.reducer';

export const selectRecipeFeature =
  createFeatureSelector<RecipesState>('recipes');

export const selectRecipes = createSelector(
  selectRecipeFeature,
  (state: RecipesState) => state.recipes
);

export const selectedRecipe = createSelector(
  selectRecipeFeature,
  (state: RecipesState) => state.selectedRecipe
);
