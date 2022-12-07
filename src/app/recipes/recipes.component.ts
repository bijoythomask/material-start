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

  coulumnCount$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small])
    .pipe(
      map((result) => {
        const breakpoint = result.breakpoints;
        if (breakpoint[Breakpoints.Large]) return 3;
        else if (breakpoint[Breakpoints.Medium]) return 2;
        return 1;
      })
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<RecipesState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadRecipess());
    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small])
      .pipe(tap((result) => console.log(result)))
      .subscribe((val) => {
        console.log(val);
      });
  }
}
