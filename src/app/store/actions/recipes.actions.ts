import { createAction, props } from '@ngrx/store';
import { Recipe } from 'src/app/model/recipe.model';

export const loadRecipess = createAction('[Recipes] Load Recipess');

export const loadRecipessSuccess = createAction(
  '[Recipes] Load Recipess Success',
  props<{ data: any }>()
);

export const loadRecipessFailure = createAction(
  '[Recipes] Load Recipess Failure',
  props<{ error: any }>()
);

export const selectRecipe = createAction(
  '[Recipes] Select Recipe Failure',
  props<{ recipe: Recipe }>()
);
