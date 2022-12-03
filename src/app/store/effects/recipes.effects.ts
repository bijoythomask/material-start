import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { RecipeServiceService } from 'src/app/service/recipe-service.service';
import { loadRecipess, loadRecipessSuccess } from '../actions/recipes.actions';

@Injectable()
export class RecipesEffects {
  constructor(
    private actions$: Actions,
    private recipeService: RecipeServiceService
  ) {}
  loadRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRecipess),
      mergeMap(() =>
        this.recipeService
          .getRecipes()
          .pipe(map((recipes) => loadRecipessSuccess({ data: recipes })))
      )
    )
  );
}
