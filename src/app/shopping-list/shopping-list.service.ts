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
  startEditing = new Subject<number>();

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
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
