import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, pipe, tap } from 'rxjs';
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

  flexLayout$ = this.breakpointObserver
    .observe([
      Breakpoints.XLarge,
      Breakpoints.Large,
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.Handset,
    ])
    .pipe(
      map((result) => {
        const breakpoint = result.breakpoints;
        if (breakpoint[Breakpoints.Handset]) return { col: 1, height: 180 };
        if (breakpoint[Breakpoints.Tablet]) return { col: 1, height: 200 };
        else if (breakpoint[Breakpoints.Small]) return { col: 1, height: 380 };
        else if (breakpoint[Breakpoints.Medium]) return { col: 2, height: 400 };
        else if (breakpoint[Breakpoints.Large]) return { col: 3, height: 500 };
        else if (breakpoint[Breakpoints.XLarge]) return { col: 4, height: 600 };
        return { col: 1, height: 320 };
      })
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<RecipesState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadRecipess());
  }
}
