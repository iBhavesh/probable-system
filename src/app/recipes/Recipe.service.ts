import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './Recipe.model';

const DUMMY_RECIPES = [
  new Recipe(
    'Test Recipe',
    'Simply a test',
    'https://www.simplyrecipes.com/thmb/ZeUpv7mtCBnGm4cfhrIV85SYv3E=/1629x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-LEAD-2-a4f6dc01259d413fb2a6cd49532ae966.jpg',
    [new Ingredient('Item 1', 1), new Ingredient('Item 2', 1)]
  ),
  new Recipe(
    'Another Test Recipe',
    'Simply another test',
    'https://www.simplyrecipes.com/thmb/ZeUpv7mtCBnGm4cfhrIV85SYv3E=/1629x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-LEAD-2-a4f6dc01259d413fb2a6cd49532ae966.jpg',
    [new Ingredient('Item 1', 1), new Ingredient('Item 2', 1)]
  ),
];

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = DUMMY_RECIPES;

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.recipes);
  }
}
