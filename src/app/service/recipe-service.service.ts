import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Recipe } from '../model/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeServiceService {
  constructor(private db: AngularFireDatabase) {}

  getRecipes() {
    return this.db.object('recipes').valueChanges();
  }
}
