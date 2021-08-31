import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  slSubscription!: Subscription;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slSubscription = this.slService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy() {
    this.slSubscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.slService.startEditing.next(index);
  }
}
