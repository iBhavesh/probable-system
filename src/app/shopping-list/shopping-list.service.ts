import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Tomato', 2),
    new Ingredient('Apples', 3),
  ];

  ingredientChanged = new Subject<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach((newIngredient) => {
      let isPresent = false;
      this.ingredients.forEach((element) => {
        if (newIngredient.name === element.name) {
          element.amount += newIngredient.amount;
          isPresent = true;
        }
      });
      if (!isPresent) this.ingredients.push(newIngredient);
    });

    this.ingredientChanged.next(this.ingredients.slice());
  }
}
