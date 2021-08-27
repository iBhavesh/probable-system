import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './Recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
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

  getRecipe() {
    return this.recipes.slice();
  }
}
