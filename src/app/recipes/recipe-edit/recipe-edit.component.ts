import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { filter, startWith } from 'rxjs';
import { Recipe } from 'src/app/model/recipe.model';
import { selectedRecipe } from 'src/app/store/selectors/recipes.selectors';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe = {
    name: '',
    description: '',
    ingredients: [],
    steps: [],
    timers: [],
    imageURL: '',
    originalURL: '',
    id: 0,
  };

  recipeForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(selectedRecipe)
      .pipe(
        startWith(this.recipe),
        filter((recipe) => recipe !== undefined)
      )
      .subscribe((recipe) => {
        this.recipeForm = this.fb.group({
          name: this.fb.control(recipe.name),
          description: this.fb.control(recipe.description),
          steps: this.fb.array([]),
          ingredients: this.fb.array([]),
          imageURL: this.fb.control(recipe.imageURL),
          referenceURL: this.fb.control(recipe.originalURL),
        });
        recipe.steps.forEach((item) => {
          (<FormArray>this.recipeForm.get('steps')).push(new FormControl(item));
        });
        recipe.ingredients.forEach((item) => {
          (<FormArray>this.recipeForm.get('ingredients')).push(
            new FormGroup({
              name: new FormControl(item.name),
              description: new FormControl(item.name),
              quantity: new FormControl(item.quantity),
              type: new FormControl(item.type),
            })
          );
        });
      });
  }

  get steps() {
    return this.recipeForm.get('steps') as FormArray;
  }
  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get imgUrl() {
    return this.recipeForm.get('imageURL') as FormControl;
  }

  addStep() {
    this.steps.push(new FormControl(null));
  }
  deleteStep(index: number) {
    this.steps.removeAt(index);
  }
  addIngredient() {
    this.ingredients.push(
      this.fb.group({
        quantity: new FormControl(0),
        name: new FormControl(null),
        type: new FormControl(null),
      })
    );
  }
  deleteIngredient(index: number) {
    this.ingredients.removeAt(index);
  }
  onSubmit() {
    console.log(this.recipeForm.value);
  }
}
