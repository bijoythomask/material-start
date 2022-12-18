import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
} from '@angular/forms';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe = {
    name: 'Crock Pot Roast',
    description: 'This is an recipe for mouth watering Roast ',
    ingredients: [
      {
        quantity: '1',
        name: ' beef roast',
        type: 'Meat',
      },
      {
        quantity: '1 package',
        name: 'brown gravy mix',
        type: 'Baking',
      },
      {
        quantity: '1 package',
        name: 'dried Italian salad dressing mix',
        type: 'Condiments',
      },
      {
        quantity: '1 package',
        name: 'dry ranch dressing mix',
        type: 'Condiments',
      },
      {
        quantity: '1/2 cup',
        name: 'water',
        type: 'Drinks',
      },
    ],
    steps: [
      'Place beef roast in crock pot.',
      'Mix the dried mixes together in a bowl and sprinkle over the roast.',
      'Pour the water around the roast.',
      'Cook on low for 7-9 hours.',
    ],
    timers: [0, 0, 0, 420],
    imageURL:
      'http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg',
    originalURL: 'http://www.food.com/recipe/to-die-for-crock-pot-roast-27208',
    id: 0,
  };

  recipeForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.recipeForm = this.fb.group({
      name: this.fb.control(this.recipe.name),
      description: this.fb.control(this.recipe.description),
      steps: this.fb.array([]),
      ingredients: this.fb.array([]),
    });
    this.recipe.steps.forEach((item) => {
      (<FormArray>this.recipeForm.get('steps')).push(new FormControl(item));
    });
    this.recipe.ingredients.forEach((item) => {
      (<FormArray>this.recipeForm.get('ingredients')).push(
        new FormGroup({
          name: new FormControl(item.name),
          description: new FormControl(item.name),
          quantity: new FormControl(item.quantity),
          type: new FormControl(item.type),
        })
      );
    });
  }

  get steps() {
    return this.recipeForm.get('steps') as FormArray;
  }
  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
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
